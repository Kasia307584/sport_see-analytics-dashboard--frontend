import caloriesIcon from "../../images/calories-icon.png";
import proteinIcon from "../../images/protein-icon.png";
import carbsIcon from "../../images/carbs-icon.png";
import fatIcon from "../../images/fat-icon.png";
import styles from "./KeyData.module.css";
import KeyDataItem from "./KeyDataItem";

export default function KeyData(props) {
  const { keyData } = props;

  return (
    <div className={styles["keyData-wrapper"]}>
      <KeyDataItem
        icon={caloriesIcon}
        value={keyData?.calorieCount}
        unit="kCal"
        title="Calories"
      />
      <KeyDataItem
        icon={proteinIcon}
        value={keyData?.proteinCount}
        unit="g"
        title="Protéines"
      />
      <KeyDataItem
        icon={carbsIcon}
        value={keyData?.carbohydrateCount}
        unit="g"
        title="Glucides"
      />
      <KeyDataItem
        icon={fatIcon}
        value={keyData?.lipidCount}
        unit="g"
        title="Lipides"
      />
    </div>
  );
}
