import * as React from 'react';

export const useNodeRefPosition = ({ ref }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0, height: 0 });

  React.useEffect(() => {
    const currentSpotRef = ref.current;
    if (!currentSpotRef) return;

    const updatePosition = () => {
      setPosition(currentSpotRef.getBoundingClientRect());
    };
    const mutationObserver = new MutationObserver(updatePosition);
    const resizeObserver = new ResizeObserver(updatePosition);
    mutationObserver.observe(currentSpotRef, {
      attributes: true,
      attributeFilter: ['style'],
    });
    resizeObserver.observe(document.body);
    return () => {
      mutationObserver.disconnect();
      resizeObserver.disconnect();
    };
  }, [setPosition, ref]);

  return [position, setPosition];
};
