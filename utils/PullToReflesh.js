const PullToReflesh = () => {
  let _startY;
  const body = document.querySelector("body");

  body.addEventListener(
    "touchstart",
    e => {
      _startY = e.touches[0].pageY;
    },
    { passive: true }
  );

  body.addEventListener(
    "touchmove",
    e => {
      const y = e.touches[0].pageY;
      // Activate custom pull-to-refresh effects when at the top of the container
      // and user is scrolling up.
      if (
        document.scrollingElement.scrollTop === 0 &&
        y > _startY &&
        !document.body.classList.contains("refreshing")
      ) {
        // refresh body.
        location.reload();
      }
    },
    { passive: true }
  );
};

export default PullToReflesh;
