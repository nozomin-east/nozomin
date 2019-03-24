import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler;
};

const Button: React.SFC<ButtonProps> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
