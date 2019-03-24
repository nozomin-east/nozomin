import React from 'react';
import { Link } from 'react-router-dom';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { UserIcon } from '~components/atoms/Icon';
import Container from '~utils/storybook/Container';
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
      <Container>
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
      </Container>
      <h2>Loading</h2>
      <Container>
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
      </Container>
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
  )))
  .add('Labeled', withInfo()(() => (
    <React.Fragment>
      <h2>Left</h2>
      <Container>
        <FlatButton
          color="primary"
          left={<UserIcon />}
          onClick={action('clicked')}
        >
          Button
        </FlatButton>
        <FlatButton
          color="secondary"
          left={<UserIcon />}
          onClick={action('clicked')}
        >
          Button
        </FlatButton>
        <FlatButton
          color="caution"
          left={<UserIcon />}
          onClick={action('clicked')}
        >
          Button
        </FlatButton>
      </Container>
      <h2>Right</h2>
      <Container>
        <FlatButton
          color="primary"
          right={<UserIcon />}
          onClick={action('clicked')}
        >
          Button
        </FlatButton>
        <FlatButton
          color="secondary"
          right={<UserIcon />}
          onClick={action('clicked')}
        >
          Button
        </FlatButton>
        <FlatButton
          color="caution"
          right={<UserIcon />}
          onClick={action('clicked')}
        >
          Button
        </FlatButton>
      </Container>
    </React.Fragment>
  )));
