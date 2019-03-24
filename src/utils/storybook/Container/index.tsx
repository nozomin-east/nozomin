import styles from './styles.scss';
import React from 'react';
import withStyleNames from '~components/hoc/withStyleNames';

const Container: React.SFC = ({ children }) => (
  <div
    styleName="container"
  >
    {children}
  </div>
);

export default withStyleNames(styles)(Container);
