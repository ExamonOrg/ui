import styles from "./FloatingButton.module.css";
import helper from "../svg/helper.svg";

export default function FloatingButton(props) {
  return (
    <a onClick={props.onClick} class={styles.float}>
      <img src={helper} alt="Helper Icon" />
    </a>
  );
}
