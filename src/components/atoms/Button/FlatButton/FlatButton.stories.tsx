import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import FlatButton from './';

storiesOf('/Button/FlatButton', module)
  .add('Color', () => (
    <React.Fragment>
      <h2>Primary</h2>
      <FlatButton
        color="primary"
        onClick={action('clicked')}
      >
        Basic
      </FlatButton>
      <h2>Secondary</h2>
      <FlatButton
        color="secondary"
        onClick={action('clicked')}
      >
        Basic
      </FlatButton>
      <h2>Caution</h2>
      <FlatButton
        color="caution"
        onClick={action('clicked')}
      >
        Basic
      </FlatButton>
    </React.Fragment>
  ));
