import styles from './styles.scss';
import React from 'react';
import CSSModules from 'react-css-modules';

const Body: React.SFC<any> = ({ children }) => (
  <div styleName="body">
    {children}
  </div>
);

export default CSSModules(Body, styles);
