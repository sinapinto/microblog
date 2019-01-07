// @ts-ignore
import { isKeyHotkey } from 'is-hotkey';
import PropTypes from 'prop-types';
import React from 'react';
import {
  MdCode,
  MdFormatBold,
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatQuote,
  MdFormatUnderlined,
  MdLooksOne,
  MdLooksTwo,
} from 'react-icons/md';
import { Editor } from 'slate-react';
import {
  Blockquote,
  Button,
  Code,
  H1,
  H2,
  Ol,
  Toolbar,
  Ul,
} from './components';

const DEFAULT_NODE = 'paragraph';

const isBoldHotkey = isKeyHotkey('mod+b');
const isItalicHotkey = isKeyHotkey('mod+i');
const isUnderlinedHotkey = isKeyHotkey('mod+u');
const isCodeHotkey = isKeyHotkey('mod+`');

const icons = {
  bold: <MdFormatBold />,
  italic: <MdFormatItalic />,
  underlined: <MdFormatUnderlined />,
  code: <MdCode />,
  'heading-one': <MdLooksOne />,
  'heading-two': <MdLooksTwo />,
  'block-quote': <MdFormatQuote />,
  'numbered-list': <MdFormatListNumbered />,
  'bulleted-list': <MdFormatListBulleted />,
};

export class TextEditor extends React.Component {
  hasMark = type => {
    const { value } = this.props;
    return value.activeMarks.some(mark => mark.type === type);
  };

  hasBlock = type => {
    const { value } = this.props;
    return value.blocks.some(node => node.type === type);
  };

  ref = editor => {
    this.editor = editor;
  };

  render() {
    return (
      <div>
        {!this.props.readOnly && (
          <Toolbar>
            {this.renderMarkButton('bold')}
            {this.renderMarkButton('italic')}
            {this.renderMarkButton('underlined')}
            {this.renderMarkButton('code')}
            {this.renderBlockButton('heading-one')}
            {this.renderBlockButton('heading-two')}
            {this.renderBlockButton('block-quote')}
            {this.renderBlockButton('numbered-list')}
            {this.renderBlockButton('bulleted-list')}
          </Toolbar>
        )}
        <Editor
          spellCheck
          readOnly={this.props.readOnly}
          placeholder={this.props.placeholder}
          ref={this.ref}
          value={this.props.value}
          onChange={this.props.onChange}
          onKeyDown={this.onKeyDown}
          renderNode={this.renderNode}
          renderMark={this.renderMark}
        />
      </div>
    );
  }

  renderMarkButton = type => {
    const isActive = this.hasMark(type);

    return (
      <Button
        active={isActive}
        onMouseDown={event => this.onClickMark(event, type)}
      >
        {icons[type]}
      </Button>
    );
  };

  renderBlockButton = type => {
    let isActive = this.hasBlock(type);

    if (['numbered-list', 'bulleted-list'].includes(type)) {
      const {
        value: { document, blocks },
      } = this.props;

      if (blocks.size > 0) {
        const parent = document.getParent(blocks.first().key);
        isActive = this.hasBlock('list-item') && parent && parent.type === type;
      }
    }

    return (
      <Button
        active={isActive}
        onMouseDown={event => this.onClickBlock(event, type)}
      >
        {icons[type]}
      </Button>
    );
  };

  renderNode = (props, editor, next) => {
    const { attributes, children, node } = props;

    switch (node.type) {
      case 'block-quote':
        return <Blockquote {...attributes}>{children}</Blockquote>;
      case 'bulleted-list':
        return <Ul {...attributes}>{children}</Ul>;
      case 'heading-one':
        return <H1 {...attributes}>{children}</H1>;
      case 'heading-two':
        return <H2 {...attributes}>{children}</H2>;
      case 'list-item':
        return <li {...attributes}>{children}</li>;
      case 'numbered-list':
        return <Ol {...attributes}>{children}</Ol>;
      default:
        return next();
    }
  };

  renderMark = (props, editor, next) => {
    const { children, mark, attributes } = props;

    switch (mark.type) {
      case 'bold':
        return <strong {...attributes}>{children}</strong>;
      case 'code':
        return <Code {...attributes}>{children}</Code>;
      case 'italic':
        return <em {...attributes}>{children}</em>;
      case 'underlined':
        return <u {...attributes}>{children}</u>;
      default:
        return next();
    }
  };

  onKeyDown = (event, editor, next) => {
    let mark;

    if (isBoldHotkey(event)) {
      mark = 'bold';
    } else if (isItalicHotkey(event)) {
      mark = 'italic';
    } else if (isUnderlinedHotkey(event)) {
      mark = 'underlined';
    } else if (isCodeHotkey(event)) {
      mark = 'code';
    } else {
      return next();
    }

    event.preventDefault();
    editor.toggleMark(mark);
  };

  onClickMark = (event, type) => {
    event.preventDefault();
    this.editor.toggleMark(type);
  };

  onClickBlock = (event, type) => {
    event.preventDefault();

    const { editor } = this;
    const { value } = editor;
    const { document } = value;

    // Handle everything but list buttons.
    if (type !== 'bulleted-list' && type !== 'numbered-list') {
      const isActive = this.hasBlock(type);
      const isList = this.hasBlock('list-item');

      if (isList) {
        editor
          .setBlocks(isActive ? DEFAULT_NODE : type)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list');
      } else {
        editor.setBlocks(isActive ? DEFAULT_NODE : type);
      }
    } else {
      // Handle the extra wrapping required for list buttons.
      const isList = this.hasBlock('list-item');
      const isType = value.blocks.some(block => {
        return !!document.getClosest(block.key, parent => parent.type === type);
      });

      if (isList && isType) {
        editor
          .setBlocks(DEFAULT_NODE)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list');
      } else if (isList) {
        editor
          .unwrapBlock(
            type === 'bulleted-list' ? 'numbered-list' : 'bulleted-list'
          )
          .wrapBlock(type);
      } else {
        editor.setBlocks('list-item').wrapBlock(type);
      }
    }
  };
}

TextEditor.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
};
