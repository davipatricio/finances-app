import Buttons from "@/components/Dashboard/Buttons";
import HistoryCard from "@/components/Dashboard/HistoryCard";
import RangeInfo from "@/components/Dashboard/RangeInfo";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.range}>
        <RangeInfo />
      </div>

      <div className={styles.buttons}>
        <Buttons />
      </div>

      <div className={styles.history}>
        <HistoryCard />
      </div>
    </div>
  );
}
