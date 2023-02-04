"use client";

import styles from "./index.module.scss";

interface ItemProps {
  name: string;
  date: string;
  value: number;
  isPositive: boolean;
}

export default function Item({ name, date, value, isPositive }: ItemProps) {
  const formattedValue = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (
      e.type === "keydown" &&
      !["Enter", " "].includes((e as React.KeyboardEvent<HTMLDivElement>).key)
    )
      return;

    alert("Clicked");
  };

  return (
    <div
      className={styles.item}
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex={0}
    >
      <div className={styles.mainInfo}>
        <div className={styles.itemName}>
          <p>{name}</p>
        </div>
        <div className={styles.itemDate}>
          <p>{date}</p>
        </div>
      </div>

      <div className={styles.itemValue}>
        <p className={isPositive ? styles.earn : styles.lose}>
          {formattedValue}
        </p>
      </div>
    </div>
  );
}
