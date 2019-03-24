import styles from './styles.scss';
import React from 'react';
import cx from 'classnames';
import withStyleNames from '~components/hoc/withStyleNames';
import { Color } from '~types/components';

export type LabelProps = {
  children: React.ReactNode;
  color: Color;
};

const Label: React.SFC<LabelProps> = ({ children, color }) => {
  const styleNames = cx('label', color);

  return (
    <div
      styleName={styleNames}
    >
      {children}
    </div>
  );
};

export default withStyleNames(styles)(Label);
