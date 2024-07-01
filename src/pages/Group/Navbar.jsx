import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Avatar, Text } from "../../components/ui";
import styles from "./styles/Heading.module.css";

export default function Navbar({ group }) {
  return (
    <div className={styles.heading}>
      <Link to=".." className={styles.navigateIcon}>
        <ArrowLeft />
      </Link>
      <div className={styles.title}>
        <Avatar color={group.color}>
          {group.name.slice(0, 2).toUpperCase()}
        </Avatar>
        <Text step={5} weight="500">
          {group.name}
        </Text>
      </div>
    </div>
  );
}
