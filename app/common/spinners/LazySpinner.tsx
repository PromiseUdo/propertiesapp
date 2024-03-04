import useLazySpinner from "@/hooks/useLazySpinner";
import React from "react";

interface Props {
  show: boolean;
  delay?: number;
  children?: React.ReactNode;
}
const LazySpinner = (props: Props) => {
  const showSpinner = useLazySpinner(props.show, props.delay);
  return showSpinner ? (
    <div className="flex justify-center items-center w-full">
      {props.children || "Loading..."}
    </div>
  ) : null;
};

export default LazySpinner;
