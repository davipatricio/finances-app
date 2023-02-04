import Link from "next/link";
import { FaDollarSign } from "react-icons/fa";

import styles from "./index.module.scss";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <FaDollarSign />
        <p>Finanças</p>
      </div>
      <nav className={styles.links}>
        <Link href="/auth/register">Registrar</Link>
        <Link href="/auth/login">Login</Link>
      </nav>
    </header>
  );
}
