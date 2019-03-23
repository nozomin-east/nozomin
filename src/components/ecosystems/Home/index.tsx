import styles from './styles.scss';
import CSSModules from 'react-css-modules';
import React from 'react';
import { Button } from 'jill-ui';

const Home = () => (
  <div styleName="home">
    HOOOOOOOOOOOOOOOOOOOOME
    <Button>Button</Button>
  </div>
);

export default CSSModules(Home, styles);
