import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'

export default function Icon({ name, size, onClick, className, stroke, strokeWidth }) {
  let props = {
    width: size,
    height: size,
    onClick,
    className: [styles.icon, className].join(' '),
    xmlns: 'http://www.w3.org/2000/svg',
  }
  let strokeProps = {
    stroke,
    strokeWidth,
  }
  switch (name) {
    case 'grin':
      return <svg {...props} viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm105.6-151.4c-25.9 8.3-64.4 13.1-105.6 13.1s-79.6-4.8-105.6-13.1c-9.9-3.1-19.4 5.4-17.7 15.3 7.9 47.1 71.3 80 123.3 80s115.3-32.9 123.3-80c1.6-9.8-7.7-18.4-17.7-15.3zM168 240c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"/></svg>
    case 'alert-circled':
      return <svg {...props} viewBox="0 0 24 24"><path d="M13 17h-2v-2h2v2zm0-4h-2V7h2v6z"/><path d="M12 4c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8m0-2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/></svg>
    case 'information-circled':
      return <svg {...props} viewBox="0 0 512 512"><path d="M480 253C478.3 129.3 376.7 30.4 253 32S30.4 135.3 32 259c1.7 123.7 103.3 222.6 227 221 123.7-1.7 222.7-103.3 221-227zM256 111.9c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM300 395h-88v-11h22V224h-22v-12h66v172h22v11z"/></svg>
    case 'checkmark-circled':
      return <svg {...props} viewBox="0 0 512 512"><path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm114.9 149.1L231.8 359.6c-1.1 1.1-2.9 3.5-5.1 3.5-2.3 0-3.8-1.6-5.1-2.9-1.3-1.3-78.9-75.9-78.9-75.9l-1.5-1.5c-.6-.9-1.1-2-1.1-3.2 0-1.2.5-2.3 1.1-3.2.4-.4.7-.7 1.1-1.2 7.7-8.1 23.3-24.5 24.3-25.5 1.3-1.3 2.4-3 4.8-3 2.5 0 4.1 2.1 5.3 3.3 1.2 1.2 45 43.3 45 43.3l111.3-143c1-.8 2.2-1.4 3.5-1.4 1.3 0 2.5.5 3.5 1.3l30.6 24.1c.8 1 1.3 2.2 1.3 3.5.1 1.3-.4 2.4-1 3.3z"/></svg>
    case 'plus':
      return <svg {...props} viewBox="0 0 512 512"><path d="M448 224H288V64h-64v160H64v64h160v160h64V288h160z"/></svg>
    case 'heart':
      return <svg {...props} viewBox="0 0 512 512"><path {...strokeProps} d="M359.385 80C319.966 80 277.171 97.599 256 132.8 234.83 97.599 192.034 80 152.615 80 83.647 80 32 123.238 32 195.779c0 31.288 12.562 71.924 40.923 105.657 28.359 33.735 45.229 51.7 100.153 88C228 425.738 256 432 256 432s28-6.262 82.924-42.564c54.923-36.3 71.794-54.265 100.153-88C467.438 267.703 480 227.067 480 195.779 480 123.238 428.353 80 359.385 80z"/></svg>
    case 'heart-outline':
      return <svg {...props} viewBox="0 0 512 512"><path {...strokeProps} d="M359.385 80C319.966 80 277.171 97.599 256 132.8 234.83 97.599 192.034 80 152.615 80 83.647 80 32 123.238 32 195.779c0 31.288 12.562 71.924 40.923 105.657 28.359 33.735 45.229 51.7 100.153 88C228 425.738 256 432 256 432s28-6.262 82.924-42.564c54.923-36.3 71.794-54.265 100.153-88C467.438 267.703 480 227.067 480 195.779 480 123.238 428.353 80 359.385 80zm67.445 211.141c-26.852 31.94-42.18 48.895-96.729 84.947-40.237 26.596-65.252 36.301-74.102 39.233-8.85-2.933-33.864-12.639-74.102-39.233-54.548-36.052-69.876-53.006-96.729-84.948-12.065-14.351-21.857-31.274-28.316-48.943C51.062 226.355 48 210.304 48 195.779c0-30.284 10.131-55.643 29.297-73.335 9.14-8.437 20.158-14.992 32.752-19.484 12.945-4.619 27.266-6.96 42.566-6.96 38.018 0 73.217 17.682 89.674 45.046L256 163.844l13.711-22.798C286.169 113.682 321.368 96 359.385 96c15.3 0 29.621 2.341 42.566 6.959 12.594 4.493 23.612 11.048 32.752 19.484C453.869 140.136 464 165.495 464 195.779c0 14.525-3.062 30.576-8.854 46.418-6.458 17.668-16.25 34.592-28.316 48.944z"/></svg>
    case 'chevron-up':
      return <svg {...props} viewBox="0 0 512 512"><path d="M256 213.7l174.2 167.2c4.3 4.2 11.4 4.1 15.8-.2l30.6-29.9c4.4-4.3 4.5-11.3.2-15.5L264.1 131.1c-2.2-2.2-5.2-3.2-8.1-3-3-.1-5.9.9-8.1 3L35.2 335.3c-4.3 4.2-4.2 11.2.2 15.5L66 380.7c4.4 4.3 11.5 4.4 15.8.2L256 213.7z"/></svg>
    case 'search':
      return <svg {...props} viewBox="0 0 512 512"><path d="M344.5 298c15-23.6 23.8-51.6 23.8-81.7 0-84.1-68.1-152.3-152.1-152.3C132.1 64 64 132.2 64 216.3c0 84.1 68.1 152.3 152.1 152.3 30.5 0 58.9-9 82.7-24.4l6.9-4.8L414.3 448l33.7-34.3-108.5-108.6 5-7.1zm-43.1-166.8c22.7 22.7 35.2 52.9 35.2 85s-12.5 62.3-35.2 85c-22.7 22.7-52.9 35.2-85 35.2s-62.3-12.5-85-35.2c-22.7-22.7-35.2-52.9-35.2-85s12.5-62.3 35.2-85c22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2z"/></svg>
    case 'sad-outline':
      return <svg {...props} viewBox="0 0 512 512"><path d="M399.283 283.797c-5.1-16.379-14.22-29.995-33.802-37.263s-35.265-2.877-49.868 6.15c-7.615 4.707-10.029 14.019-4.214 22.123 2.049 2.854 5.019 4.717 8.376 5.963 5.059 1.876 10.584 1.678 14.965-1.036 4.778-2.957 10.644-6.526 19.607-3.199 9.01 3.343 11.103 9.839 12.752 15.161 1.551 4.952 5.62 8.724 10.693 10.606 3.357 1.246 6.816 1.774 10.236.938 8.867-2.184 13.916-10.907 11.255-19.443zM196.549 252.685c-14.603-9.027-30.286-13.418-49.868-6.15s-28.702 20.884-33.802 37.263c-2.661 8.536 2.389 17.259 11.255 19.443 3.42.837 6.878.309 10.236-.938 5.073-1.883 9.143-5.654 10.693-10.606 1.649-5.322 3.743-11.818 12.752-15.161 8.964-3.327 14.829.242 19.607 3.199 4.381 2.714 9.907 2.912 14.965 1.036 3.357-1.246 6.327-3.108 8.376-5.963 5.815-8.105 3.401-17.416-4.214-22.123z"/><path d="M256 32C132.288 32 32 132.288 32 256s100.288 224 224 224 224-100.288 224-224S379.712 32 256 32zm135.765 359.765C355.5 428.028 307.285 448 256 448s-99.5-19.972-135.765-56.235C83.972 355.5 64 307.285 64 256s19.972-99.5 56.235-135.765C156.5 83.972 204.715 64 256 64s99.5 19.972 135.765 56.235C428.028 156.5 448 204.715 448 256s-19.972 99.5-56.235 135.765z"/><path d="M349.119 359.176C348.013 357.59 321 320 256 320c-65.261 0-92.014 37.59-93.121 39.176-5.057 7.247-3.283 17.221 3.963 22.278a15.93 15.93 0 0 0 9.143 2.881c5.052 0 10.024-2.388 13.135-6.845.176-.251 18.9-25.49 66.88-25.49 48 0 66.703 25.239 66.879 25.49 3.11 4.457 8.081 6.845 13.134 6.845 3.161 0 6.354-.935 9.144-2.881 7.245-5.058 9.02-15.031 3.962-22.278z"/></svg>
    case 'rice':
      return <svg {...props} viewBox="0 0 20 20"><path d="M16.949 7.472c-2.176 2.902-4.095 3.002-7.046 3.152h-.101c-3.591-.002-6.138-1.336-6.138-1.832-.002-.471 2.298-1.697 5.605-1.819l.59-1.473-.057-.002c-4.908 0-7.791 1.562-7.791 3.051v2c0 .918.582 8.949 7.582 8.949s8-8.031 8-8.949v-2c0-.391-.201-.787-.584-1.158l-.06.081zm.64-4.77a1 1 0 0 0-1.399.201l-3.608 4.809 2.336-5.838a1 1 0 1 0-1.857-.742L9.802 9.274c2.882-.147 4.277-.227 6.067-2.611l1.919-2.561a1 1 0 0 0-.199-1.4z"/></svg>
    default: return null
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  onClick: PropTypes.func,
  className: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
}

Icon.defaultProps = {
  size: 24,
  onClick: null,
}
