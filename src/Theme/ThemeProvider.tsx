import styles from './styles.scss';
import CSSModules from 'react-css-modules';
import React from 'react';
import { Theme } from './types';

interface ThemeProviderProps {
  theme: Theme;
  children: React.ReactNode;
}

const ThemeProvider: React.SFC<ThemeProviderProps> = ({ theme, children }) => (
  <div styleName="theme" className={theme}>
    {children}
  </div>
);

export default CSSModules(ThemeProvider, styles);
