import { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 ">
      <p>Navbar</p>
      <div className="flex space-x-4">
        <Link to={"/about"}>about</Link>
        <Link to={"/locations"}>locations</Link>
        <Link to={"/contacts"}>contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
