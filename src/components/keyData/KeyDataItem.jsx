import styles from "./KeyData.module.css";

export default function KeyDataItem(props) {
  const { icon, value, unit, title } = props;

  return (
    <>
      <div className={styles["keyItem-wrapper"]}>
        <div>
          <img
            src={icon}
            alt={`${title}-icon`}
            className={styles["keyItem-icon"]}
          />
        </div>
        <div className={styles["keyItem-info"]}>
          <h2 className={styles["keyItem-count"]}>{value + unit}</h2>
          <p className={styles["keyItem-name"]}>{title}</p>
        </div>
      </div>
    </>
  );
}
