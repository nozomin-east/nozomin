import { configure, addDecorator } from '@storybook/react';
import asDecorator from './asDecorator';
import Container from './Container';

addDecorator(asDecorator(Container));

// automatically import all files ending in *.stories.js
const req = require.context('../src/', true, /\.stories\.(ts|tsx)$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
