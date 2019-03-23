import styles from './styles.scss';
import React from 'react';
import cx from 'classnames';
import withStyleNames from '~components/hoc/withStyleNames';
import { Color } from '~types/component';

export type ButtonProps = {
  styleName?: string;
  className?: string;
  children: React.ReactNode;
  color?: Color;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Base: React.SFC<ButtonProps> = (props) => {
  const {
    children,
    className,
    color = 'primary',
    ...restProps
  } = props;

  const styleNames = cx('button', color);

  return (
    <button
      className={className}
      styleName={styleNames}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default withStyleNames(styles)(Base);
