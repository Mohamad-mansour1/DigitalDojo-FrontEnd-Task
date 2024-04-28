"use client";

import Link from "@/components/Link/page";
import { useAddNote, AddNoteProps } from "./useAddNote";
import styles from "./page.module.css";

const AddNote: React.FC<AddNoteProps> = (props: AddNoteProps) => {
  const { title, description, setTitle, setDescription, onSubmit } =
    useAddNote(props);

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Add New Note</h1>
      <Link href="/" label="Back To Home" />
      <div className={styles.page_content}>
        <form onSubmit={onSubmit}>
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              rows={5}
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
