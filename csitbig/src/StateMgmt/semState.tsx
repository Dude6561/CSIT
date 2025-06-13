import { create } from "zustand";

interface SemObj {
  [SemName: string]: {
    [subject: string]: {
      questions: any[];
      notes: any[];
      syllabus: any[];
    };
  };
}
type SemInfo = {
  sem: SemObj[];
  setSemInfo: (sem: SemObj) => void;
};
const useSemStore = create<SemInfo>((set) => ({
  sem: [],
  setSemInfo: (sem) => {
    set(() => ({ sem: [sem] }));
  },
}));
export default useSemStore;
