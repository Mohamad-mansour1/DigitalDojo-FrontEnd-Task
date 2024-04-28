"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { getNoteById, updateNote } from "@/actions/note.action";
import INote from "@/models/INote";
import { RootState } from "@/reducers/rootReducer";

export const useEditNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [noteId, setNoteId] = useState("");

  const selectedNote: INote | null = useSelector(
    (state: RootState) => state.note.selectedNote
  );

  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const note: INote = {
      id: +noteId,
      title,
      description,
    };

    dispatch(updateNote(note));
  };

  useEffect(() => {
    if (!selectedNote && noteId) dispatch(getNoteById(+noteId));

    if (selectedNote) {
      const { title, description } = selectedNote;

      setTitle(title);
      setDescription(description);
    }
  }, [selectedNote, noteId, dispatch]);

  return {
    title,
    description,
    setTitle,
    setDescription,
    setNoteId,
    onSubmit,
  };
};
