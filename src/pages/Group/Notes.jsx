import { useContext } from "react";
import { Text } from "../../components/ui";
import { NotesContext } from "../../store/notesContext";
import styles from "./styles/Notes.module.css";

export default function Notes({ group }) {
  const noteCtx = useContext(NotesContext);

  const handleDelete = (groupId, noteId) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      noteCtx.deleteNote(groupId, noteId);
    }
  };

  return (
    <div className={styles.notes}>
      {group.notes?.slice(0).reverse().map((n) => (
        <div key={n.id} className={styles.note}>
          <div className={styles.metadata}>
            <Text style={{ color: "var(--secondary-text)" }} weight="500">
              {n.createdAt.time} <span>{n.createdAt.date}</span>
            </Text>
            <button onClick={() => handleDelete(group.id, n.id)} className={styles.deleteButton}>
              Delete
            </button>
          </div>
          <Text style={{ whiteSpace: "pre-line" }}>{n.text}</Text>
        </div>
      ))}
    </div>
  );
}
