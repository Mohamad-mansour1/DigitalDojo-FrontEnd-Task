import { createSlice } from "@reduxjs/toolkit";
import INote from "@/models/INote";

export interface NotesState {
  isLoading: boolean;
  isGetNotesSuccess: boolean;
  isGetNoteByIdSuccess: boolean;
  isAddNoteSuccess: boolean;
  isUpdateNoteSuccess: boolean;
  isDeleteNoteSuccess: boolean;
  notes: INote[] | null;
  selectedNote: INote | null;
}

const initialState: NotesState = {
  isLoading: false,
  isGetNotesSuccess: false,
  isGetNoteByIdSuccess: false,
  isAddNoteSuccess: false,
  isUpdateNoteSuccess: false,
  isDeleteNoteSuccess: false,
  notes: null,
  selectedNote: null,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    apiRequest: (state) => {
      state.isLoading = true;
    },
    apiFailure: (state) => {
      state.isLoading = false;
    },
    getNotes(state, action) {
      state.isLoading = false;
      state.isGetNotesSuccess = true;
      state.notes = action.payload.notes;
    },
    getNoteById(state, action) {
      state.isLoading = false;
      state.isGetNoteByIdSuccess = true;
      state.selectedNote = action.payload.selectedNote;
    },
    addNote(state, action) {
      state.isLoading = false;
      state.isAddNoteSuccess = true;
      state.notes = action.payload.notes;
    },
    updateNote(state, action) {
      state.isLoading = false;
      state.isUpdateNoteSuccess = true;
      state.notes = action.payload.notes;
    },
    deleteNote(state, action) {
      state.isLoading = false;
      state.isDeleteNoteSuccess = true;
      state.notes = action.payload.notes;
    },
    clearSelectedNote(state) {
      state.selectedNote = null;
    },
  },
});

export const {
  apiRequest,
  apiFailure,
  getNotes,
  getNoteById,
  addNote,
  updateNote,
  deleteNote,
  clearSelectedNote,
} = notesSlice.actions;
export default notesSlice.reducer;
