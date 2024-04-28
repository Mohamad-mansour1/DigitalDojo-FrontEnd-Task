import INote from "@/models/INote";

let initialNotes: INote[] = [
  {
    id: 1,
    title: "This is the first note",
    description: "This is the first note description",
  },
  {
    id: 2,
    title: "Note 2",
    description: "Note 2 description",
  },
  {
    id: 3,
    title: "Note 3",
    description: "Note 3 description",
  },
  {
    id: 4,
    title: "Note 4",
    description: "Note 4 description",
  },
  {
    id: 5,
    title: "Note 5",
    description: "Note 5 description",
  },
];

export const notesService = {
  getNotes: async (): Promise<any> => {
    try {
      const response: any = await initialNotes;

      return response;
    } catch (error) {
      throw new Error("Get Notes failed");
    }
  },
  getNoteById: async (id: number): Promise<any> => {
    try {
      const response: any = await initialNotes.find((val) => val.id === id);

      return response;
    } catch (error) {
      throw new Error("Get Note by id failed");
    }
  },
  addNote: async (note: INote): Promise<any> => {
    try {
      note.id = initialNotes[initialNotes.length - 1].id + 1;

      initialNotes.push(note);

      return initialNotes;
    } catch (error) {
      throw new Error("Add Note failed");
    }
  },
  updateNote: async (note: INote): Promise<any> => {
    try {
      const noteToUpdate = initialNotes.find((val) => val.id === note.id);

      if (noteToUpdate) {
        noteToUpdate.title = note.title;
        noteToUpdate.description = note.description;

        const oldNotes = initialNotes.filter((val) => val.id !== note.id);

        oldNotes.push(noteToUpdate);

        initialNotes = oldNotes;
      }

      return initialNotes;
    } catch (error) {
      throw new Error("Update Note failed");
    }
  },
  deleteNote: async (id: number): Promise<any> => {
    try {
      const newNotes = initialNotes.filter((val) => val.id !== id);

      initialNotes = newNotes;

      return initialNotes;
    } catch (error) {
      throw new Error("Delete Note failed");
    }
  },
};
