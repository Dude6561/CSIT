import useTabStore from "../StateMgmt/State";
import data from "../Constant_Json/csitCourse.json";

function useFiler() {
  const dropTab = useTabStore((state) => state.dropTab);
  const activeTab = useTabStore((state) => state.activeTab);
  return <div></div>;
}
export default useFiler;
