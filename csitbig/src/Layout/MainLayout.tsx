import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
