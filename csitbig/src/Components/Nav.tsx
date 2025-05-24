import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <nav className="flex justify-between">
        <Link to="/home">csitinfoNepal</Link>
        <div className=" space-x-2">
          <Link to="/Resource">Resource</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
