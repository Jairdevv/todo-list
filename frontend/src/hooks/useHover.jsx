import { useState } from "react";

const useHover = () => {
  const [isHover, setIsHover] = useState(false);

  const handlerMouseEnter = () => {
    setIsHover(true);
  };

  const handlerMouseLeave = () => {
    setIsHover(false);
  };

  return {
    isHover,
    handlerMouseEnter,
    handlerMouseLeave,
  };
};

export default useHover;
