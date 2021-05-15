import { useState, useEffect } from "react";

const useMediaQuery = () => {
  const [mobile, setMobile] = useState(window.innerWidth < 500);
  useEffect(() => {
    const onChange = () => setMobile(window.innerWidth < 500);
    window.addEventListener("resize", onChange);
    return () => window.addEventListener("resize", onChange);
  }, []);

  return mobile;
};

export default useMediaQuery;
