import pinch from 'touch-pinch';

VisualViewport.onresize = e => {
  e.preventDefault();
  console.log(e);
}

const reflowOnMobileZoom = (el, minZoom = 0.6, maxZoom = 2) => {

  const getZoom = el => +getComputedStyle(el).zoom;

  const setZoom = (el, zoom) => el.style.zoom = `${zoom}`;

  const preventDefaultPinch = e => {
    if (e.cancelable) e.preventDefault();
  };

  pinch(el)
  .on('start', () => {
    el.addEventListener('touchmove', preventDefaultPinch, { passive: false, capture: true });
  })
  .on('change', (dist, prev) => {
    const zoom = getZoom(el);
    const diff = dist - prev;
    const newZoom = zoom + (diff / 350);

    if (newZoom >= minZoom && newZoom <= maxZoom) {
      setZoom(el, newZoom);
    }

  })
  .on('end', () => {
    el.removeEventListener('touchmove', preventDefaultPinch, { passive: false, capture: true });
  });

}

export default reflowOnMobileZoom;
