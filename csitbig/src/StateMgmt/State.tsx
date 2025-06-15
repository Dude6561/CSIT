import { create } from "zustand";

type TabStore = {
  activeTab: string;
  dropTab: string;
  dropSub: string;
  setActiveTab: (tab: string) => void;
  setDropTab: (drop: string) => void;
  setSub: (sub: string) => void;
};

const useTabStore = create<TabStore>((Set) => ({
  activeTab: "Questions",
  dropTab: "First",
  dropSub: "",
  setDropTab: (drop: string) => Set({ dropTab: drop }),
  setActiveTab: (tab: string) => Set({ activeTab: tab }),
  setSub: (sub: string) => Set({ dropSub: sub }),
}));

export default useTabStore;
