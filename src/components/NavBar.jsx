import React from "react";
import logo from "../assets/logo1.png";
import { FaLinkedin, FaGithub, FaInstagram , FaFacebook} from "react-icons/fa";


const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className = 'mx-2 w-10'src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaFacebook />
      </div>
    </nav>
  );
};

export default NavBar;
