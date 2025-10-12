// libs
import { useEffect, useState } from "react";

const useDelayRender = (delay = 500) => {
  const [isDelayed, setDelayed] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDelayed(false);
    }, delay);
  }, [delay]);

  return isDelayed;
};

export default useDelayRender;
