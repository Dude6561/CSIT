import useTabStored from "../StateMgmt/State";
import library from "../assets/library.jpg";
import { DropDown } from "./dropDown";
const Resource = () => {
  const setActiveTab = useTabStored((state) => state.setActiveTab);
  const activeTab = useTabStored((state) => state.activeTab);
  console.log(activeTab);

  // when button click function for color
  // console.log(sem);
  // console.log(activeTab);
  // const getColor = (tab: string) => {
  //   if (activeTab == "Question") {
  //     return "bg-green-500";
  //   } else if (activeTab == "Note") {
  //     return "bg-green-800";
  //   }
  // };

  return (
    <div className="">
      <img src={library} className=" w-full h-[150px] "></img>
      <div className="flex space-x-2.5 pt-4  justify-center items-center flex-wrap gap-2.5">
        <button
          className="bg-pink-600 text-white text-xl p-1 pl-8 pr-8 font-bold   rounded-sm cursor-pointer"
          onClick={() => setActiveTab("Questions")}
        >
          Question
        </button>
        <button
          className="bg-pink-600 text-white text-xl p-1 pl-13 pr-13 font-bold   rounded-sm cursor-pointer"
          onClick={() => {
            setActiveTab("Note");
          }}
        >
          Note
        </button>
        <button
          className="bg-pink-600 text-white text-xl p-1 pl-8 pr-8 font-bold   rounded-sm cursor-pointer"
          onClick={() => setActiveTab("Syllabus")}
        >
          Syllabus
        </button>
      </div>
      <DropDown />
    </div>
  );
};

export default Resource;
