import useTabStore from "../StateMgmt/State";
import data from "../Constant_Json/csitCourse.json";
import useSemStore from "../StateMgmt/semState";

function useFilter() {
  const dropTab = useTabStore((state) => state.dropTab);
  const activeTab = useTabStore((state) => state.activeTab);
  const setSemInfo = useSemStore((state) => state.setSemInfo);
  const sem = useSemStore((state) => state.sem);

  function filter() {
    if (activeTab === "Question" && dropTab === "First") {
      setSemInfo({ "Semester I": data["Semester I"] });
    }
    console.log(sem);
  }

  return { filter };
}

export default useFilter;
