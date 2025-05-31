import { create } from "zustand";

type TabStore = {
  activeTab: String;
  dropTab: String;
  setActiveTab: (tab: string) => void;
  setDropTab: (drop: string) => void;
};
type SemInfo = {
  [SemName: string]: {
    [subject: string]: {
      question: any[];
      note: any[];
      syllabus: any[];
    };
  };
};

const useTabStore = create<TabStore>((Set) => ({
  activeTab: "Questions",
  dropTab: "First",
  setDropTab: (drop: string) => Set({ dropTab: drop }),
  setActiveTab: (tab: string) => Set({ activeTab: tab }),
}));
const useSemStore = create<SemInfo>((Set) => ({
  SemesterI: {
    IntroductionToInformationTechnology: {
      question: [],
      note: [],
      syllabus: [],
    },
  },
}));
export default useTabStore;
