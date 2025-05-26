const Resource = () => {
  return (
    <div>
      <div className="flex justify-around pt-4">
        <button className="bg-red-700  text-white font-bold  p-0.5 text-[12px] rounded-sm pl-4 pr-4 cursor-pointer">
          Resource
        </button>
        <button className="bg-red-700  text-white font-bold  p-0.5 text-[12px] rounded-sm pl-4 pr-4 cursor-pointer">
          Syllabus
        </button>
        <button className="bg-red-700  text-white font-bold  p-0.5 text-[12px] rounded-sm pl-4 pr-4 cursor-pointer">
          Notes
        </button>
      </div>
      <div>
        <div className="my-6 flex gap-6 justify-center flex-wrap">
          <div className="flex flex-col gap-2">
            <label className="text-sm"> Semester </label>
            <select
              name="Semester"
              className="p-1 pl-4 pr-3 border-2 border-zinc-600 rounded"
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

export default Resource;
