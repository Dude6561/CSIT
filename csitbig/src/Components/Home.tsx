import { Link } from "react-router-dom";
import logo from "../assets/Hand coding-rafiki.svg";

const Home = () => {
  return (
    <div className=" ">
      <div className="pl-6 pt-14 md:flex  ">
        <div className="w-[610px] mx-auto md:justify-between">
          <h1 className="text-3xl font-bold sm:text-5xl md:pt-56  ">
            Welcome To <span className="text-pink-600 ">csitinfoNepal.</span>
          </h1>

          <h2 className="font-medium pt-5 md:text-2xl md:font-bold pb-4">
            The New Way Of Online Learning.
          </h2>
          <Link to="/resource">
            <button className="bg-blue-800 text-white font-semibold pl-5 pr-5 pt-2 pb-2 rounded-4xl hover:bg-blue-700 hover:cursor-pointer">
              Access Resources
            </button>
          </Link>
        </div>
        <img
          src={logo}
          alt="logo"
          className="hidden md:block md:pt-6 mx-auto w-1/2 md:w-2/3 lg:w-3/4 xl:w-full max-w-[700px] h-auto transition-all duration-300 ease-in-out"
        />
      </div>

      <div className="pl-6 pt-5 md:flex md:justify-between">
        {/* Logo visible only below md */}
        <img src={logo} alt="Logo" className="block md:hidden w-5xl" />
      </div>
    </div>
  );
};

export default Home;
