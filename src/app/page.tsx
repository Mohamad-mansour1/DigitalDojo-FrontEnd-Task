"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "@/components/Link/page";
import styles from "./page.module.css";
import NoteItem from "@/components/NoteItem/page";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { getNotes, clearSelectedNote } from "@/actions/note.action";
import { RootState } from "@/reducers/rootReducer";
import INote from "@/models/INote";

export default function Home() {
  const dispatch = useAppDispatch();

  const notes: INote[] | null = useSelector(
    (state: RootState) => state.note.notes
  );

  useEffect(() => {
    if (!notes) dispatch(getNotes());
  }, [notes, dispatch]);

  useEffect(() => {
    dispatch(clearSelectedNote());
  }, [dispatch]);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Note List</h1>
      <Link href="/AddNote" label="Add New Note" />
      <div className={styles.note_list}>
        {notes && notes.length
          ? notes?.map((note) => (
              <NoteItem
                key={note.id}
                id={note.id}
                title={note.title}
                description={note.description}
              />
            ))
          : "Loading..."}
      </div>
    </main>
  );
}
