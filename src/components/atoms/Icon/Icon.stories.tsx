import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { UserIcon } from './';

storiesOf('/Icon', module)
  .add('Icons', withInfo()(() => (
    <React.Fragment>
      <h2>UserIcon</h2>
      <UserIcon />
    </React.Fragment>
  )));
