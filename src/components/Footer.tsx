import { FC } from "react";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <div className="mt-150">
      <div>
        <h3>Let's talk about your project</h3>
        <p>jndjkgkegkjdkggkjrkrgkrjgkrgnkbvfvkfr</p>
        <Link to={"/contacts"}>Get in touch</Link>
      </div>
      <div className="flex justify-between items-center px-4 py-2 ">
        <p>Navbar</p>
        <div className="flex space-x-4">
          <Link to={"/about"}>about</Link>
          <Link to={"/locations"}>locations</Link>
          <Link to={"/contacts"}>contact</Link>
        </div>
      </div>
      <div className="flex flex-items row">
        <div className="flex flex-items row">
          <div>
            <p>trial</p>
            <p>trial</p>
            <p>trial</p>
          </div>
          <div>
            <p>trial</p>
            <p>trial</p>
            <p>trial</p>
          </div>
        </div>

        <div>
          <a>Facebook</a>
          <a>Youtube</a>
          <a>Instagram</a>
          <a>Pinterest</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
