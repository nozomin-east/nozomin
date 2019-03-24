import styles from './styles.scss';
import React, { useMemo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cx from 'classnames';
import Spinner from '~components/atoms/Spinner';
import withStyleNames from '~components/hoc/withStyleNames';
import { Color } from '~types/component';

export type ButtonProps = BaseProps | AsLinkProps;

type BaseProps = {
  styleName?: string;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  color?: Color;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  as?: any;
};

type AsLinkProps = BaseProps
  & {
    as: typeof Link;  // TODO Linkコンポーネント作ったら差し替え
  }
  & LinkProps;

const Base: React.SFC<ButtonProps> = (props) => {
  const {
    children,
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
      <div styleName="spinner">
        <Spinner
          inline
          color={spinnerColor}
        />
      </div>
    );
  }, [loading]);

  const renderText = useMemo(() => () => {
    const WrapperComponent = as;
    return WrapperComponent ? (
      <WrapperComponent
        styleName="inner"
        {...restProps}
      >
        {children}
      </WrapperComponent>
    ) : (
      <div
        styleName="inner"
      >
        {children}
      </div>
    );
  }, [as]);

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
