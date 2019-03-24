import styles from './styles.scss';
import * as React from 'react';
import cx from 'classnames';

interface HeadingProps {
  children: React.ReactNode;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  styleName?: string;
  className?: string;
  center?: boolean;
}

const Heading = ({
  className = '',
  children,
  as,
  center = false,
}: HeadingProps) => {
  const classNames = cx(styles.heading, {
    [styles.center]: center,
    [className]: !!className,
  });

  return React.createElement(as, { className: classNames }, children);
};

export default Heading;
