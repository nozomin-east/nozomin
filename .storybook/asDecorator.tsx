import React from 'react';

const asDecorator = (Component: any, props: any = {}) => (
  (story: any) => (
    <Component {...props}>
      {story()}
    </Component>
  )
);

export default asDecorator;
