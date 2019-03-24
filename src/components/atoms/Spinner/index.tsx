import styles from './styles.scss';
import React from 'react';
import cx from 'classnames';
import withStyleNames from '~components/hoc/withStyleNames';

interface SpinnerProps {
  color?: 'primary' | 'white';
  inline?: boolean;
}

const Spinner: React.SFC<SpinnerProps> = ({
  color = 'primary',
  inline = false,
}) => {
  const containerStyleNames = cx('container', { inline });
  const styleNames = cx('spinner', color);

  return (
    <div styleName={containerStyleNames}>
      <div styleName={styleNames} />
    </div>
  );
};

export default withStyleNames(styles)(Spinner);
