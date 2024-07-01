import styles from "./styles/Modal.module.css";

export default function Modal({ children, onClick }) {
  return (
    <div className={styles.container}>
      <div onClick={onClick} className={styles.backdrop}></div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
