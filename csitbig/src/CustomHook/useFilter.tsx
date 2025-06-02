import useTabStore from "../StateMgmt/State";
import data from "../Constant_Json/csitCourse.json";
import useSemStore from "../StateMgmt/semState";

function useFilter() {
  const dropTab = useTabStore((state) => state.dropTab);
  const activeTab = useTabStore((state) => state.activeTab);
  const setSemInfo = useSemStore((state) => state.setSemInfo);

  type SemesterKeys = `Semester ${
    | "I"
    | "II"
    | "III"
    | "IV"
    | "V"
    | "VI"
    | "VII"
    | "VIII"}`;
  // creates union string

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
  // it contains keys and value

  function filter() {
    const tempDropTab = semMap[dropTab]; // for getting semester from sem map record
    if (activeTab === "Questions" && dropTab === dropTab) {
      setSemInfo({ [tempDropTab]: data[tempDropTab] });
    }
  }

  return { filter };
}

export default useFilter;
