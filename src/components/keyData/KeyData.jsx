import calories from "../../images/calories-icon.png";
import protein from "../../images/protein-icon.png";
import carbs from "../../images/carbs-icon.png";
import fat from "../../images/fat-icon.png";
import styles from "./KeyData.module.css";

export default function KeyData(props) {
  const { keyData } = props;

  return (
    <div className={styles["keyData-wrapper"]}>
      <KeyDataItem keyData={keyData} kind={calories} />
      <KeyDataItem keyData={keyData} kind={protein} />
      <KeyDataItem keyData={keyData} kind={carbs} />
      <KeyDataItem keyData={keyData} kind={fat} />
    </div>
  );
}

function KeyDataItem(props) {
  const { keyData, kind } = props;

  return (
    <>
      {kind === calories && (
        <div className={styles["keyItem-wrapper"]}>
          <img src={kind} alt={`${kind}-icon`} className="keyData-icon" />
          <h2 className="keyItem-count">{keyData?.calorieCount + "kCal"}</h2>
          <p className="keyItem-name">Calories</p>
        </div>
      )}
      {kind === protein && (
        <div className="keyItem-wrapper">
          <img src={kind} alt={`${kind}-icon`} className="keyData-icon" />
          <h2 className="keyItem-count">{keyData?.proteinCount + "g"}</h2>
          <p className="keyItem-name">Protéines</p>
        </div>
      )}
      {kind === carbs && (
        <div className="keyItem-wrapper">
          <img src={kind} alt={`${kind}-icon`} className="keyData-icon" />
          <h2 className="keyItem-count">{keyData?.carbohydrateCount + "g"}</h2>
          <p className="keyItem-name">Glucides</p>
        </div>
      )}
      {kind === fat && (
        <div className="keyItem-wrapper">
          <img src={kind} alt={`${kind}-icon`} className="keyData-icon" />
          <h2 className="keyItem-count">{keyData?.lipidCount + "g"}</h2>
          <p className="keyItem-name">Lipides</p>
        </div>
      )}
    </>
  );
}
