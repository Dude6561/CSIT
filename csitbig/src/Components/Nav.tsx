import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <nav className="flex justify-between bg-black text-white font-bold pl-2 p-4 text-2xl">
        <Link to="/home" className="">
          csitinfoNepal
        </Link>
        <div className=" space-x-8 ">
          <Link to="/resource">Resource</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
