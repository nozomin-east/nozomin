import styles from './styles.scss';
import React from 'react';
import cx from 'classnames';
import withStyleNames from '~components/hoc/withStyleNames';
import Base, { ButtonProps } from '../Base';

export type FlatButtonProps = ButtonProps;

const FlatButton: React.SFC<FlatButtonProps> = (props) => {
  const {
    children,
    ...restProps
  } = props;
  const styleNames = cx('flat-button');

  return (
    <Base
      styleName={styleNames}
      {...restProps}
    >
      {children}
    </Base>
  );
};

export default withStyleNames(styles)(FlatButton);
