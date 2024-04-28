import { combineReducers } from "redux";
import noteReducer, { NotesState } from "./note.reducer";

const rootReducer = combineReducers({
  note: noteReducer,
});

export type RootState = {
  note: NotesState;
};

export default rootReducer;
