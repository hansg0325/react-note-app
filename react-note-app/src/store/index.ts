import menuReducer from "./menu/menuSlice";
import modalReducer from "./modal/modalSlice";
import notesListSlice from "./notesList/notesListSlice";
import notesListReducer from "./notesList/notesListSlice";
import tagsReducer from "./tags/tagsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    modal: modalReducer,
    tags: tagsReducer,
    notesList: notesListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export {
  setMainNotes,
  setTrashNotes,
  setArchiveNotes,
  unArchiveNote,
  restoreNote,
  deleteNote,
  setPinnedNotes,
  setEditNote,
  readNote,
  removeTags,
} from "./notesList/notesListSlice";

export {
  toggleTagsModal,
  toggleCreateNoteModal,
  toggleFiltersModal,
} from "./modal/modalSlice";

export { toggleMenu } from "./menu/menuSlice";
