import Link from "next/link";
import { useNoteItem, NoteItemProps } from "./useNoteItem";
import styles from "./page.module.css";

const NoteItem: React.FC<NoteItemProps> = (props: NoteItemProps) => {
  const { id, title, description, onDelete } = useNoteItem(props);

  return (
    <div className={styles.note_item}>
      <h2 className={styles.title}>
        <Link href={`/EditNote/${id}`}>{title}</Link>
      </h2>
      <p className={styles.description}>{description}</p>
      <button className={styles.btn_delete} onClick={() => onDelete()}>
        Delete
      </button>
    </div>
  );
};

export default NoteItem;
