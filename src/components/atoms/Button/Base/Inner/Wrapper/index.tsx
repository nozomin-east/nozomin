import React from 'react';

type WrapperProps = {
  children: React.ReactNode;
  styleName: string;
  className: string;
  [key: string]: any;
};

const Wrapper: React.SFC<WrapperProps> = ({
  children,
  className,
}) => (
  <span
    className={className}
  >
    {children}
  </span>
);

export default Wrapper;
