import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import Spinner from './';

storiesOf('/Atoms/Spinner', module)
  .add('Color', withInfo()(() => (
    <React.Fragment>
      <h2>Primary</h2>
      <div>
        <Spinner />
      </div>
      <h2>White</h2>
      <div style={{ backgroundColor: '#555' }}>
        <Spinner color="white" />
      </div>
    </React.Fragment>
  )))
  .add('Inline', withInfo()(() => (
    <React.Fragment>
      <h2>Inline</h2>
      <div>
        <Spinner inline />
      </div>
    </React.Fragment>
  )));
