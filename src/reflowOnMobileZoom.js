import pinch from 'touch-pinch';

VisualViewport.onresize = e => {
  e.preventDefault();
  console.log(e);
}

const reflowOnMobileZoom = (el, minZoom = 0.6, maxZoom = 2, cssProp = 'zoom') => {

  const getZoom = el => +getComputedStyle(el)[cssProp];

  const setZoom = (el, zoom) => el.style[cssProp] = `${zoom}`;

  const preventDefaultPinch = e => {
    if (e.cancelable) e.preventDefault();
  };

  pinch(el)
  .on('start', () => {
    // el.style['touch-action'] = 'none';
    el.addEventListener('touchmove', preventDefaultPinch, { passive: false, capture: true });
  })
  .on('change', (dist, prev) => {
    const zoom = getZoom(el);
    const diff = dist - prev;
    let newZoom = zoom + (diff / 350);

    if (newZoom < minZoom) {
      newZoom = minZoom;
    } else if (newZoom > maxZoom) {
      newZoom = maxZoom;
    }

    setZoom(el, newZoom);

  })
  .on('end', () => {
    // el.style['touch-action'] = 'auto';
    el.removeEventListener('touchmove', preventDefaultPinch, { passive: false, capture: true });
  });

}

export default reflowOnMobileZoom;
