import styles from "./index.module.scss";
import Item from "./Item";

export default function HistoryCard() {
  return (
    <>
      <h1 className={styles.title}>Item</h1>
      <div className={styles.items}>
        <Item name="Item 1" date="1 jan" value={100} isPositive />
      </div>

      <div className={styles.divider} />

      <div className={styles.monthInfo}>
        <div className={styles.earn}>
          <p>Ganhos: </p>
          <span>R$ 623,12</span>
        </div>

        <div className={styles.spent}>
          <p>Despesas: </p>
          <span>R$ 623,12</span>
        </div>

        <div className={styles.total}>
          <p>Total: </p>
          <span>R$ 623,12</span>
        </div>
      </div>
    </>
  );
}
