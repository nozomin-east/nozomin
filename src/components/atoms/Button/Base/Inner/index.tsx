import styles from './styles.scss';
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import withStyleNames from '~components/hoc/withStyleNames';

export type InnerProps = BaseProps | AsLinkProps;

type BaseProps = {
  children: React.ReactNode;
  as?: any;
};

type AsLinkProps = {
  children: React.ReactNode;
  as: typeof Link;  // TODO Linkコンポーネント作ったら差し替え
}
& LinkProps;

const Inner: React.SFC<InnerProps> = ({ children, as, ...restProps }) => {
  const WrapperComponent = as;
  return WrapperComponent ? (
    <WrapperComponent
      styleName="inner"
      {...restProps}
    >
      {children}
    </WrapperComponent>
  ) : (
    <span
      styleName="inner"
    >
      {children}
    </span>
  );
};

export default withStyleNames(styles)(Inner);
