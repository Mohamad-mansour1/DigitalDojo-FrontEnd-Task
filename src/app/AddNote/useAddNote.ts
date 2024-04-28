"use client";

import { useState } from "react";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { addNote } from "@/actions/note.action";

export interface AddNoteProps {}

export const useAddNote = (props: AddNoteProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const note = {
      id: 0,
      title,
      description,
    };

    dispatch(addNote(note));
  };

  return {
    ...props,
    title,
    description,
    setTitle,
    setDescription,
    onSubmit,
  };
};
