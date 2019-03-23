import React from 'react';
import CSSModules from 'react-css-modules';
import ThemeProvider from '~/Theme/ThemeProvider';
import Home from '~ecosystems/Home';
import Body from '~environments/Body';
import styles from './global.scss';

const App = () => (
  <ThemeProvider theme="grey-scale">
    <Body>
      <div>
        header
      </div>
      <div>
        <Home />
      </div>
    </Body>
  </ThemeProvider>

);

export default CSSModules(App, styles);
