import { Dispatch } from "redux";
import {
  apiRequest,
  apiFailure,
  getNotes as getNotesReducer,
  getNoteById as getNoteByIdReducer,
  addNote as addNoteReducer,
  updateNote as updateNoteReducer,
  deleteNote as deleteNoteReducer,
  clearSelectedNote as clearSelectedNoteReducer,
} from "@/reducers/note.reducer";
import { notesService } from "@/services/note.service";
import INote from "@/models/INote";

export const getNotes = () => async (dispatch: Dispatch) => {
  try {
    dispatch(apiRequest());

    const response = await notesService.getNotes();
    if (response) {
      dispatch(getNotesReducer({ notes: response as INote[] }));
    }
  } catch (error) {
    dispatch(apiFailure());
  }
};

export const getNoteById = (id: number) => async (dispatch: Dispatch) => {
  try {
    dispatch(apiRequest());

    const response = await notesService.getNoteById(id);
    if (response) {
      dispatch(getNoteByIdReducer({ selectedNote: response as INote }));
    }
  } catch (error) {
    dispatch(apiFailure());
  }
};

export const addNote = (note: INote) => async (dispatch: Dispatch) => {
  try {
    dispatch(apiRequest());

    const response = await notesService.addNote(note);
    if (response) {
      dispatch(addNoteReducer({ notes: response as INote[] }));
    }
  } catch (error) {
    dispatch(apiFailure());
  }
};

export const updateNote = (note: INote) => async (dispatch: Dispatch) => {
  try {
    dispatch(apiRequest());

    const response = await notesService.updateNote(note);
    if (response) {
      dispatch(updateNoteReducer({ notes: response as INote[] }));
    }
  } catch (error) {
    dispatch(apiFailure());
  }
};

export const deleteNote = (id: number) => async (dispatch: Dispatch) => {
  try {
    dispatch(apiRequest());

    const response = await notesService.deleteNote(id);
    if (response) {
      dispatch(deleteNoteReducer({ notes: response as INote[] }));
    }
  } catch (error) {
    dispatch(apiFailure());
  }
};

export const clearSelectedNote = () => (dispatch: Dispatch) => {
  try {
    dispatch(clearSelectedNoteReducer());
  } catch (error) {
    dispatch(apiFailure());
  }
};
