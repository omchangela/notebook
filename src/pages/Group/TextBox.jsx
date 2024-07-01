import { useCallback, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { SendHorizonal } from "lucide-react";

import { NotesContext } from "../../store/notesContext";
import styles from "./styles/TextBox.module.css";

export default function TextBox() {
  const [input, setInput] = useState("");
  const { id } = useParams();
  const noteCtx = useContext(NotesContext);

  const handleNoteSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (input.trim().length == 0) {
        return;
      }
      setInput("");
      noteCtx.addNote(input, id);
    },
    [noteCtx, input, id]
  );

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      handleNoteSubmit(event);
    }
  };

  return (
    <div className={styles.textBox}>
      <div className={styles.wrapper}>
        <form onSubmit={handleNoteSubmit}>
          <textarea
            autoFocus
            onKeyDown={handleKeyDown}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              `Enter your text here...`
            }
          ></textarea>
          <button type="submit">
            <SendHorizonal />
          </button>
        </form>
      </div>
    </div>
  );
}
