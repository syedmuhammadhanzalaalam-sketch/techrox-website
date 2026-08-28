/**
 * Fixed, full-viewport, plain black background with a slowly animated
 * grid — used site-wide behind every page. Mounted once in the root layout.
 */
export function GridMotionBackground() {
  return <div aria-hidden className="grid-motion-bg" />;
}
