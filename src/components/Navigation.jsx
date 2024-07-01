import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

import ModalContent from "./ModalContent";
import NoteGroups from "./NoteGroups";
import { Button, Modal, Text } from "./ui";
import styles from "./styles/Navigation.module.css";

export default function Navigation({ isRootRoute }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key == "Escape" && isModalOpen) {
        setIsModalOpen(false);
      } else if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        setIsModalOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  let hiddenNavStyles = !isRootRoute ? styles.hideElem : "";

  return (
    <>
      <nav className={`${styles.nav} ${hiddenNavStyles}`}>
        <Link className={styles.title} to={"/"}>
          <Text step={6} weight="600">
            Pocket notes
          </Text>
        </Link>
        <Button onClick={toggleModal}>
          <div className={styles.buttonContent}>
            <div>
              <Plus strokeWidth={3} size={16} />
              Create notes group
            </div>
          </div>
        </Button>
        <NoteGroups />
      </nav>
      {isModalOpen &&
        createPortal(
          <Modal onClick={toggleModal}>
            <ModalContent toggleModal={toggleModal} />
          </Modal>,
          document.getElementById("modal")
        )}
    </>
  );
}
