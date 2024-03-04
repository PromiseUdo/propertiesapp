import styles from "./circular.module.css";
type ICircularProps = {
  color: string;
  size: string;
};
function CircularProgress({
  color = "#ffffff",
  size = "25px",
}: ICircularProps) {
  return (
    <span style={{ width: size, height: size, color }}>
      <span className={styles["lds-ring"]} style={{ borderTopColor: color }}>
        <span style={{ borderTopColor: color }}></span>
        <span style={{ borderTopColor: color }}></span>
        <span style={{ borderTopColor: color }}></span>
        <span style={{ borderTopColor: color }}></span>
      </span>
    </span>
  );
}

export default CircularProgress;
