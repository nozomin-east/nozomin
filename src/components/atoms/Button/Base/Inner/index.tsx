import styles from './styles.scss';
import React, { useMemo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import withStyleNames from '~components/hoc/withStyleNames';
import Label from './Label';
import Wrapper from './Wrapper';

export type InnerProps = {
  children: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
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
  as,
  ...restProps
}) => {
  const renderLeft = useMemo(() =>
    () => left && (
      <Label>
        {left}
      </Label>
    ), [left]);

  const renderRight = useMemo(() =>
    () => right && (
      <Label>
        {right}
      </Label>
    ), [right]);

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
