import { useAppDispatch } from "@/hooks/useAppDispatch";
import { deleteNote } from "@/actions/note.action";

export interface NoteItemProps {
  id: number;
  title: string;
  description: string;
}

export const useNoteItem = (props: NoteItemProps) => {
  const { id } = props;

  const dispatch = useAppDispatch();

  const onDelete = () => {
    dispatch(deleteNote(id));
  };

  return {
    ...props,
    onDelete,
  };
};
