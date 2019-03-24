import styles from './styles.scss';
import React from 'react';
import withStyleNames from '~components/hoc/withStyleNames';

export type LabelProps = {
  children: React.ReactNode;
};

const Label: React.SFC<LabelProps> = ({ children }) => {
  return (
    <div
      styleName="label"
    >
      {children}
    </div>
  );
};

export default withStyleNames(styles)(Label);
