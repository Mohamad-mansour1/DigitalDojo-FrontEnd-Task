"use client";

import { useEffect } from "react";
import Link from "@/components/Link/page";
import { useEditNote } from "./useEditNote";
import styles from "./page.module.css";

const EditNote: React.FC<any> = ({ params }) => {
  const { title, description, setTitle, setDescription, setNoteId, onSubmit } =
    useEditNote();

  useEffect(() => {
    setNoteId(params.id);
  }, [params, setNoteId]);

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

export default EditNote;
