import React from 'react';
import debounce from '../../utils/index';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const updateScreenSize = debounce(
    () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    },
    0,
    true,
  );
  React.useEffect(() => {
    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);
  return screenSize;
};

const withScreenSize = Comp => (props) => {
  const screenSize = useScreenSize();
  return <Comp {...props} screenSize={screenSize} />;
};

export default withScreenSize;
