import styles from '../src/themes/theme.scss';
import React from 'react';
import CSSModules from 'react-css-modules';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.SFC<ContainerProps> = ({ children }) => (
  <div className="vintage-floral">
    {children}
  </div>
);

export default CSSModules(Container, styles);
