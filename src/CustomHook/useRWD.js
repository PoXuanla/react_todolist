import { useState, useEffect } from "react";

const useRWD = () => {
  const [device, setDevice] = useState(null);

  const handleRWD = () => {
    if (window.innerWidth > 768) {
      setDevice("PC");
    } else setDevice("Mobile");
  };
  useEffect(() => {
    handleRWD();
  });
  useEffect(() => {
    window.addEventListener("resize", handleRWD);
    return () => {
      window.removeEventListener("resize", handleRWD);
    };
  }, []);

  return device;
};

export default useRWD;
