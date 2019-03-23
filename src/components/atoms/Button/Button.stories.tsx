import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Button from './';

storiesOf('/Buttons/Button', module)
.add('basic', () => (
  <Button onClick={action('clicked')}>Basic</Button>
));
