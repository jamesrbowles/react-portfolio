import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-30 bg-bg-shade md:py-8 py-5 left-0 right-0 bottom-0">
      <div className="w-10/12 mx-auto md:flex md:justify-end md:items-center">
        {/* <SocialMediaIcons /> */}

        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-montserrat font-semibold text-2xl text-green">
            JAMES BOWLES
          </p>
          <p className="font-montserrat text-md text-green md:ml-4">
            ©2023 BOWLES. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
