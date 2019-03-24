import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../src/themes/theme.scss'; // FIXME ts2307

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.SFC<ContainerProps> = ({ children }) => (
  <div className="grey-scale">
    {children}
  </div>
);

export default CSSModules(Container, styles);
