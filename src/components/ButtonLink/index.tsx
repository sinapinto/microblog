import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, OutlineButton } from '../Button';

type Props = {
  history: any;
  location: any;
  match: any;
  to: any;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

function ButtonLink({ to, history, onClick, children, ...rest }: Props) {
  return (
    <Button
      {...rest}
      onClick={e => {
        onClick && onClick(e);
        history.push(to);
      }}
    >
      {children}
    </Button>
  );
}

function OutlineButtonLinkComp({
  to,
  history,
  onClick,
  children,
  ...rest
}: Props) {
  return (
    <OutlineButton
      {...rest}
      onClick={e => {
        onClick && onClick(e);
        history.push(to);
      }}
    >
      {children}
    </OutlineButton>
  );
}

export default withRouter<Props>(ButtonLink);
export const OutlineButtonLink = withRouter<Props>(OutlineButtonLinkComp);
