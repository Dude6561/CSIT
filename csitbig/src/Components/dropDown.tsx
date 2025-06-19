import { useEffect } from "react";
import useTabStore from "../StateMgmt/State";
import useSemStore from "../StateMgmt/semState";
import useFilter from "../CustomHook/useFilter";
import down from "../assets/icons8-download-32.png";
import prev from "../assets/icons8-preview-32.png";
export const DropDown = () => {
  const setDropTab = useTabStore((state) => state.setDropTab);
  const dropTab = useTabStore((state) => state.dropTab);
  const sem = useSemStore((state) => state.sem);
  const setSub = useTabStore((state) => state.setSub); //capturing the change

  const { filter } = useFilter();

  //for dropdown value
  useEffect(() => {
    filter();
  }, [dropTab]);

  // making records for easy filtering data makes dynamiclly keeping values
  type SemesterKeys = `Semester ${
    | "I"
    | "II"
    | "III"
    | "IV"
    | "V"
    | "VI"
    | "VII"
    | "VIII"}`;

  const semMap: Record<string, SemesterKeys> = {
    First: "Semester I",
    Second: "Semester II",
    Third: "Semester III",
    Fourth: "Semester IV",
    Fifth: "Semester V",
    Sixth: "Semester VI",
    Seventh: "Semester VII",
    Eighth: "Semester VIII",
  };
  // normal object keys was crashing because of undefined value now we first check if it exist and then we procede
  // const Subject = sem[0]?.[semMap[dropTab]]
  //   ? Object.keys(sem[0][semMap[dropTab]])
  //   : [];
  const Subject = Object.keys(
    sem[0]?.[semMap[dropTab]] ? sem[0][semMap[dropTab]] : []
  );

  return (
    <div>
      <div>
        <div className="my-6 flex gap-6 justify-center flex-wrap">
          <div className="flex flex-col gap-2">
            <label className="text-sm"> Semester </label>
            <select
              name="Semester"
              className="p-1 pl-4 pr-3 border-2 border-zinc-600 rounded"
              onChange={(e) => {
                setDropTab(e.target.value);
              }}
            >
              <option value="First"> First </option>
              <option value="Second"> Second </option>
              <option value="Third"> Third </option>
              <option value="Fourth"> Fourth </option>
              <option value="Fifth"> Fifth </option>
              <option value="Sixth"> Sixth </option>
              <option value="Seventh"> Seventh </option>
              <option value="Eighth"> Eighth </option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm"> Subject </label>
            <select
              name="Subject"
              className="p-1 border-2 border-zinc-600 rounded"
              onChange={(e) => {
                setSub(e.target.value);
              }}
            >
              <option>All</option>
              {Subject.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {/* showing the list  */}

      <div>
        <ul className="divide-y divide-gray-400  mt-10 ">
          {Subject.map((subject, index) => (
            <div
              className=" w-[490px] pl-5 md:w-[600px] xl:w-[1000px] m-auto  h-28 hover:bg-blue-200  hover:text-white xl:flex xl:justify-between "
              key={index}
            >
              <li className="  cursor-pointer font-bold  text-xl md:text-2xl">
                {subject}
              </li>
              <div className=" space-x-3 font-bold  items-center  flex pt-4 ">
                <button className="bg-pink-600 flex text-white  pl-3  pr-3 pt-2 pb-2 rounded-[3px]   hover:bg-blue-700 hover:cursor-pointer">
                  <img src={prev} alt="download" className=" w-6  mr-1 " />{" "}
                  Download
                </button>

                <button className="bg-pink-600 flex text-white  pl-3  pr-3 pt-2 pb-2 rounded-[3px]  hover:bg-blue-700 hover:cursor-pointer">
                  <img src={down} alt="download" className=" w-6 mr-1" />{" "}
                  Preview
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
