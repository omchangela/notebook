import { LockKeyhole } from "lucide-react";

import heroImage from "../../assets/homeImage.png";
import { Text } from "../../components/ui";
import styles from "./styles/index.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.heroWrapper}>
        <div>
          <img src={heroImage} alt="home image" />
        </div>
        <Text step={8} weight="500">
          Pocket Notes
        </Text>
        <Text style={{ color: "var(--secondary-text)" }} step={4}>
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </Text>
      </div>

      <div className={styles.endText}>
        <LockKeyhole size={14} />
        <Text>end-to-end encrypted</Text>
      </div>
    </div>
  );
}
