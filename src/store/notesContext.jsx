import { createContext, useCallback, useEffect, useMemo } from "react";
import { useImmer } from "use-immer";
import getFormatedDate from "../utils/getFormatedDate";

export const NotesContext = createContext({
  groups: [],
  getPartialGroups: () => {},
  getGroup: () => {},
  addGroup: () => {},
  addNote: () => {},
  deleteNote: () => {},  // Add deleteNote function to the context
});

const initGroupsState = () => {
  const groups = localStorage.getItem("noteGroups");
  if (!groups) {
    return [];
  }
  return JSON.parse(groups);
};

export const NotesContextProvider = ({ children }) => {
  const [groups, setGroups] = useImmer(initGroupsState);

  useEffect(() => {
    localStorage.setItem("noteGroups", JSON.stringify(groups));
  }, [groups]);

  const getPartialGroups = useCallback(() => {
    const arrOfGroups = groups.map((n) => ({
      id: n.id,
      name: n.name,
      color: n.color,
    }));
    return arrOfGroups;
  }, [groups]);

  const getGroup = useCallback(
    (id) => {
      const group = groups.find((g) => g.id === id);

      if (!group) {
        return;
      }

      return group;
    },
    [groups]
  );

  const addGroup = useCallback(
    (name, color) => {
      setGroups((draft) => {
        draft.unshift({
          id: Date.now().toString(36),
          name: name,
          color: color,
          notes: [],
        });
      });
    },
    [setGroups]
  );

  const addNote = useCallback(
    (note, id) => {
      setGroups((draft) => {
        const createdAt = getFormatedDate();
        const group = draft.find((group) => group.id === id);
        group.notes.unshift({
          id: Date.now().toString(36),
          createdAt,
          text: note,
        });
      });
    },
    [setGroups]
  );

  const deleteNote = useCallback(
    (groupId, noteId) => {
      setGroups((draft) => {
        const group = draft.find((group) => group.id === groupId);
        if (group) {
          group.notes = group.notes.filter((note) => note.id !== noteId);
        }
      });
    },
    [setGroups]
  );

  const notesProviderValues = useMemo(
    () => ({ groups, getPartialGroups, getGroup, addGroup, addNote, deleteNote }),
    [groups, getPartialGroups, getGroup, addGroup, addNote, deleteNote]
  );

  return (
    <NotesContext.Provider value={notesProviderValues}>
      {children}
    </NotesContext.Provider>
  );
};
