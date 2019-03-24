import React from 'react';
import { Link } from 'react-router-dom';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { RouterProvider } from '~utils/storybook/provider';
import FlatButton from './';

storiesOf('/Button/FlatButton', module)
  .add('Color', withInfo()(() => (
    <React.Fragment>
      <h2>Primary</h2>
      <FlatButton
        color="primary"
        onClick={action('clicked')}
      >
        Button
      </FlatButton>
      <h2>Secondary</h2>
      <FlatButton
        color="secondary"
        onClick={action('clicked')}
      >
        Button
      </FlatButton>
      <h2>Caution</h2>
      <FlatButton
        color="caution"
        onClick={action('clicked')}
      >
        Button
      </FlatButton>
    </React.Fragment>
  )))
  .add('State', withInfo()(() => (
    <React.Fragment>
      <h2>Disabled</h2>
      <FlatButton
        disabled
        color="primary"
        onClick={action('clicked')}
      >
        Button
      </FlatButton>
      <FlatButton
        disabled
        color="secondary"
        onClick={action('clicked')}
      >
        Button
      </FlatButton>
      <FlatButton
        disabled
        color="caution"
        onClick={action('clicked')}
      >
        Button
      </FlatButton>
      <h2>Loading</h2>
      <FlatButton
        loading
        color="primary"
        onClick={action('clicked')}
      >
        Button
      </FlatButton>
      <FlatButton
        loading
        color="secondary"
        onClick={action('clicked')}
      >
        Button
      </FlatButton>
      <FlatButton
        loading
        color="caution"
        onClick={action('clicked')}
      >
        Button
      </FlatButton>
    </React.Fragment>
  )))
  .add('As Component', withInfo()(() => (
    <React.Fragment>
      <h2>As Link</h2>
      <RouterProvider>
        <FlatButton
          color="primary"
          as={Link}
          to="https://google.com/"
          onClick={action('clicked')}
        >
          Button
        </FlatButton>
      </RouterProvider>
    </React.Fragment>
  )));
