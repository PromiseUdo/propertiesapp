import { useState, useEffect } from "react";

const useLazySpinner = (show: boolean = false, delay?: number) => {
  const [showSpinner, setShowSpinner] = useState(false);
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (!show) {
      setShowSpinner(false);
      return;
    }
    if (delay === 0) {
      setShowSpinner(true);
    } else {
      timeout = setTimeout(() => setShowSpinner(true), delay);
    }
    return () => {
      clearInterval(timeout);
    };
  }, [show, delay]);
  return showSpinner;
};

export default useLazySpinner;
