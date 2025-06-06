import { create } from "zustand";

type TabStore = {
  activeTab: String;
  dropTab: string;
  setActiveTab: (tab: string) => void;
  setDropTab: (drop: string) => void;
};

const useTabStore = create<TabStore>((Set) => ({
  activeTab: "Questions",
  dropTab: "First",
  setDropTab: (drop: string) => Set({ dropTab: drop }),
  setActiveTab: (tab: string) => Set({ activeTab: tab }),
}));

export default useTabStore;
