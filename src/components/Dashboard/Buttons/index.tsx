import { BiExport } from "react-icons/bi";
import { SlReload } from "react-icons/sl";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

import styles from "./index.module.scss";
import { AiOutlinePlus } from "react-icons/ai";

export default function Buttons() {
  return (
    <>
      <div>
        <button className={`${styles.exportButton} ${styles.button}`}>
          <BiExport />
          <span className={inter.className}>Exportar CSV</span>
        </button>
      </div>

      <div className={styles.management}>
        <button className={`${styles.resetButton} ${styles.button}`}>
          <SlReload />
          <span className={inter.className}>Reiniciar</span>
        </button>

        <button className={`${styles.addButton} ${styles.button}`}>
          <AiOutlinePlus />
          <span className={inter.className}>Adicionar</span>
        </button>
      </div>
    </>
  );
}
