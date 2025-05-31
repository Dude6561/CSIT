import useTabStored from "../StateMgmt/State";
import { DropDown } from "./dropDown";
import useFilter from "../CustomHook/useFilter";

const Resource = () => {
  const setActiveTab = useTabStored((state) => state.setActiveTab);
  const activeTab = useTabStored((state) => state.activeTab);
  const { filter } = useFilter();

  return (
    <div>
      <div className="flex justify-around pt-4">
        <button
          className="bg-red-700 text-white font-bold p-0.5 text-[12px] rounded-sm pl-4 pr-4 cursor-pointer"
          onClick={() => setActiveTab("Question")}
        >
          Question
        </button>
        <button
          className="bg-red-700 text-white font-bold p-0.5 text-[12px] rounded-sm pl-4 pr-4 cursor-pointer"
          onClick={() => setActiveTab("Note")}
        >
          Note
        </button>
        <button
          className="bg-red-700 text-white font-bold p-0.5 text-[12px] rounded-sm pl-4 pr-4 cursor-pointer"
          onClick={() => setActiveTab("Syllabus")}
        >
          Syllabus
        </button>
        <button onClick={() => filter()}>CLick to </button>
        <DropDown />
      </div>
    </div>
  );
};

export default Resource;
