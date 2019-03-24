import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import Heading from './';

storiesOf('/Heading', module)
  .add('Heading', withInfo()(() => (
    <React.Fragment>
      <h2>h1～h6</h2>
      <Heading as="h1">Heading</Heading>
      <Heading as="h2">Heading</Heading>
      <Heading as="h3">Heading</Heading>
      <Heading as="h4">Heading</Heading>
      <Heading as="h5">Heading</Heading>
      <Heading as="h6">Heading</Heading>
    </React.Fragment>
  )));
