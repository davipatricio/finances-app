import { BsCalendar2Event } from "react-icons/bs";
import { AiOutlineReload } from "react-icons/ai";

import styles from "./index.module.scss";

export default function RangeInfo() {
  return (
    <>
      <div className={styles.range}>
        <div className={styles.header}>
          <BsCalendar2Event />
          <span>Período:</span>
        </div>
        <div className={styles.date}>
          <span>1 jan - 31 jan</span>
          <AiOutlineReload />
        </div>
      </div>

      <span className={styles.amount}>R$2.787,32</span>
    </>
  );
}
