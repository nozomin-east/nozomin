import styles from './styles.scss';
import React, { useMemo } from 'react';
import cx from 'classnames';
import withStyleNames from '~components/hoc/withStyleNames';
import { Color } from '~types/component';
import Inner, { InnerProps } from './Inner';
import Spinner from './Spinner';

export type ButtonProps = {
  styleName?: string;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  color?: Color;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
} & InnerProps;

const Base: React.SFC<ButtonProps> = (props) => {
  const {
    className,
    disabled = false,
    loading = false,
    color = 'primary',
    left,
    right,
    onClick,
    ...restProps
  } = props;

  const styleNames = cx('button', color, {
    loading,
    disabled: disabled || loading,
  });

  const renderSpinner = useMemo(() =>
    () => {
      const spinnerColor = (color === 'primary' || color === 'caution') ? 'white' : 'primary';

      return loading && (
        <Spinner
          inline
          color={spinnerColor}
        />
      );
    }, [loading, color]);

  const renderInner = useMemo(() =>
    () => (
      <Inner
        left={left}
        right={right}
        {...restProps}
      />
    ), [restProps, left, right]);

  return (
    <button
      className={className}
      styleName={styleNames}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {renderSpinner()}
      {renderInner()}
    </button>
  );
};

export default withStyleNames(styles)(Base);
