import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <nav className="flex justify-between rounded-2xl text-black  p-4 text-[20px] w-full  sm:text-2xl lg:w-[1050px] lg:mx-auto ">
        <Link
          to="/home"
          className="text-pink-600 hover:text-pink-800 text-2xl font-bold"
        >
          csitInfoNepal
        </Link>
        <div className=" space-x-4 sm:pr-4 font-medium">
          <Link to="/resource" className="hover:text-pink-600">
            Resource
          </Link>
          <Link to="/about" className="hover:text-pink-600">
            About
          </Link>
          <Link to="/contact" className="hover:text-pink-600">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
////flex justify-between bg-black text-white font-bold pl-2 p-4 text-2xl
