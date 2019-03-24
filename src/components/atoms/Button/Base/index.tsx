import styles from './styles.scss';
import React, { useMemo } from 'react';
import cx from 'classnames';
import withStyleNames from '~components/hoc/withStyleNames';
import { Color } from '~types/component';
import ButtonSpinner from './ButtonSpinner';
import Inner, { InnerProps } from './Inner';

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
    onClick,
    as,
    ...restProps
  } = props;

  const styleNames = cx('button', color, {
    loading,
    disabled: disabled || loading,
  });

  const renderSpinner = useMemo(() => () => {
    const spinnerColor = (color === 'primary' || color === 'caution') ? 'white' : 'primary';

    return loading && (
      <ButtonSpinner
        inline
        color={spinnerColor}
      />
    );
  }, [loading, color]);

  const renderText = useMemo(() => () => (
    <Inner
      as={as}
      {...restProps}
    />
  ), [as, restProps]);

  return (
    <button
      className={className}
      styleName={styleNames}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {renderSpinner()}
      {renderText()}
    </button>
  );
};

export default withStyleNames(styles)(Base);
