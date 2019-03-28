import styles from './styles.scss';
import React from 'react';
import cx from 'classnames';
import withStyleNames from '~components/hoc/withStyleNames';

type IconProps = {
  icon: string;
};

const Base: React.SFC<IconProps> = ({ icon }) => {
  const styleNames = cx('icon', icon);

  return (
    <i
      styleName={styleNames}
      aria-hidden="true"
    />
  );
};

export default withStyleNames(styles)(Base);
