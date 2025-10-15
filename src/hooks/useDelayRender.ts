// libs
import { useEffect, useState } from "react";

const useDelayRender = (delay = 500) => {
  const [isDelayed, setDelayed] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayed(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isDelayed;
};

export default useDelayRender;
