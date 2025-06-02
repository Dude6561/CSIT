import useTabStore from "../StateMgmt/State";
export const DropDown = () => {
  const setDropTab = useTabStore((state) => state.setDropTab);
  const dropTab = useTabStore((state) => state.dropTab);

  return (
    <div>
      <div>
        <div className="my-6 flex gap-6 justify-center flex-wrap">
          <div className="flex flex-col gap-2">
            <label className="text-sm"> Semester </label>
            <select
              name="Semester"
              className="p-1 pl-4 pr-3 border-2 border-zinc-600 rounded"
              onChange={(e) => setDropTab(e.target.value)}
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
            >
              <option value="First">
                Introduction To Information Technology
              </option>
              <option value="First">IMaths</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
