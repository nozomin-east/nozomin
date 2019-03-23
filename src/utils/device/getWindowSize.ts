const getWindowSize = () => {
  const body = document.body;
  const width = window.innerWidth || body.clientWidth;
  const height = window.innerHeight || body.clientHeight;

  return ({
    width,
    height,
  });
};

export default getWindowSize;
