import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-50 bg-red pt-0.5 pb-0.5">
      <div className="w-10/12 mx-auto md:flex md:justify-between md:items-center">
        <SocialMediaIcons />

        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            JAMES BOWLES
          </p>
          <p className="font-playfair text-md text-yellow md:ml-4">
            ©2023 BOWLES. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
