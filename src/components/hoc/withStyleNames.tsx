import CSSModules from 'react-css-modules';

type WrappedComponentType<P, S> = React.ComponentClass<P, S> | React.FunctionComponent<P>;
type Styles = Record<string, string>;

const withStyleNames = (styles: Styles) =>
  <P, S = any>(WrappedComponent: WrappedComponentType<P, S>) => (
    CSSModules(WrappedComponent, styles, { allowMultiple: true })
  );

export default withStyleNames;
