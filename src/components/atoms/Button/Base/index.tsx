import styles from './styles.scss';
import React, { useMemo } from 'react';
import cx from 'classnames';
import Spinner from '~components/atoms/Spinner';
import withStyleNames from '~components/hoc/withStyleNames';
import { Color } from '~types/component';

export type ButtonProps = {
  styleName?: string;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  color?: Color;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Base: React.SFC<ButtonProps> = (props) => {
  const {
    children,
    className,
    disabled = false,
    loading = false,
    color = 'primary',
    ...restProps
  } = props;

  const styleNames = cx('button', color, {
    loading,
    disabled: disabled || loading,
  });

  const renderSpinner = useMemo(() => {
    const spinnerColor = (color === 'primary' || color === 'caution') ? 'white' : 'primary';

    return loading && (
      <div styleName="spinner">
        <Spinner
          inline
          color={spinnerColor}
        />
      </div>
    );
  }, [loading]);

  return (
    <button
      className={className}
      styleName={styleNames}
      disabled={disabled || loading}
      {...restProps}
    >
      {renderSpinner}
      {children}
    </button>
  );
};

export default withStyleNames(styles)(Base);
