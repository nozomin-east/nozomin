import styles from './styles.scss';
import React from 'react';
import Spinner, { SpinnerProps } from '~components/atoms/Spinner';
import withStyleNames from '~components/hoc/withStyleNames';

const ButtonSpinner: React.SFC<SpinnerProps> = ({ color }) => (
  <div styleName="spinner">
    <Spinner
      inline
      color={color}
    />
  </div>
);

export default withStyleNames(styles)(ButtonSpinner);
