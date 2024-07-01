import { memo, useContext } from "react";
import { NavLink } from "react-router-dom";

import { Text, Avatar } from "./ui";
import { NotesContext } from "../store/notesContext";
import styles from "./styles/NoteGroups.module.css";

/* 
  Wrapping this component with memo so it wont rerender
  when modal state changes in parent component.
*/

const NoteGroups = memo(function NoteGroups() {
  const notesCtx = useContext(NotesContext);
  const groups = notesCtx.getPartialGroups();

  return (
    <ul className={styles.ul}>
      {groups?.map((group) => (
        <NavLink to={`groups/${group.id}`} key={group.id}>
          {({ isActive }) => (
            <li className={isActive ? styles.isActive : ""}>
              <Avatar color={group.color}>
                {group.name.slice(0, 2).toUpperCase()}
              </Avatar>
              <Text step={4} weight="500">
                {group.name}
              </Text>
            </li>
          )}
        </NavLink>
      ))}
    </ul>
  );
});

export default NoteGroups;
