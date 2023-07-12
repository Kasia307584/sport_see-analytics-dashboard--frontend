import styles from "./UserGreeting.module.css";

export default function UserGreeting(props) {
  const { userName } = props;

  return (
    <div className={styles["greeting-wrapper"]}>
      <h1 className={styles["greeting-main"]}>
        Bonjour <span className={styles["user-name"]}>{userName}</span>
      </h1>
      <p className={styles["greeting-message"]}>
        Félicitations ! Vous avez explosé vos objectifs hier
      </p>
    </div>
  );
}
