import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex  mt-10 gap-10 justify-center">
      <a href="https://www.facebook.com/Deezer/">
        <BsFacebook size={30} />
      </a>
      <a href="https://www.instagram.com/deezer/?hl=en">
        <BsInstagram size={30} />
      </a>
    </div>
  );
};

export default Footer;
