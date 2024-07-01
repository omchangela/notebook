import styles from "./styles/Avatar.module.css";

export default function Avatar({ color, children }) {
  return (
    <div style={{ backgroundColor: color }} className={styles.avatar}>
      {children}
    </div>
  );
}
