import styles from './styles.scss';
import React, { useMemo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import withStyleNames from '~components/hoc/withStyleNames';
import { Color } from '~types/components';
import Label from './Label';
import Wrapper from './Wrapper';

export type InnerProps = {
  children: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
  color: Color;
} & (BaseProps | AsLinkProps);

type BaseProps = {
  as?: any;
};

type AsLinkProps = {
  as: typeof Link;  // TODO Linkコンポーネント作ったら差し替え
}
& LinkProps;

const Inner: React.SFC<InnerProps> = ({
  children,
  left,
  right,
  color,
  as,
  ...restProps
}) => {
  const renderLeft = useMemo(() =>
    () => left && (
      <Label
        color={color}
      >
        {left}
      </Label>
    ), [left, color]);

  const renderRight = useMemo(() =>
    () => right && (
      <Label
        color={color}
      >
        {right}
      </Label>
    ), [right, color]);

  const WrapperComponent = as || Wrapper;

  return (
    <WrapperComponent
      styleName="inner"
      {...restProps}
    >
      {renderLeft()}
      <div styleName="body">{children}</div>
      {renderRight()}
    </WrapperComponent>
  );
};

export default withStyleNames(styles)(Inner);
