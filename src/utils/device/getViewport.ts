import { Viewport, BreakPoint } from '~types/device';
import getWindowSize from './getWindowSize';

const getViewport = (): Viewport => {
  const { width } = getWindowSize();
  const breakPoints: Record<Viewport, BreakPoint> = {
    [Viewport.MOBILE]: BreakPoint.MOBILE,
    [Viewport.TABLET]: BreakPoint.TABLET_LANDSCAPE,
    [Viewport.DESKTOP]: BreakPoint.DESKTOP,
  };

  const viewport = Object.entries(breakPoints)
    .sort(([avp, abp], [bvp, bbp]) => (bbp - abp))
    .reduce((prev, [vp, bp]) => (
      (width < bp) ? vp : prev
    ), Viewport.DESKTOP);

  return viewport as Viewport;
};

export default getViewport;
