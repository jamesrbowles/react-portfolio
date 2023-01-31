import React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

//hooks
import useMediaQuery from "../hooks/useMediaQuery";

//custom components
import SocialMediaIcons from "../components/SocialMediaIcons";
import Sphere from "../components/Sphere";
import Sphere2 from "../components/Sphere2";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="py-10 mx-24 h-screen relative">
      {/*  HEADER SECTION */}
      <div className="relative top-1/4 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-9xl font-leagueSpartan z-10 text-center uppercase font-extrabold">
            Developer
          </p>
        </motion.div>
      </div>

      {/* TAGLINE & BUTTONS SECTION */}
      <div className="flex flex-col justify-center z-30 mt-32 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="mt-10 mb-7 text-xl text-center text-grey font-montserrat">
            Front-end engineer specialising in JavaScript and ReactJS. Take a
            deep dive into my portfolio to learn a little more.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <div className="w-1/2 mx-auto z-10">
          <motion.div
            className="flex mt-5 gap-3 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <AnchorLink
              className="basis-1/2 rounded-sm py-3 px-7
                transition duration-500 border-2 border-bg-shade bg-dark-grey hover:bg-grey hover:text-dark-grey text-center font-bold"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              Contact Me
            </AnchorLink>
            <AnchorLink
              className="basis-1/2 rounded-sm py-3 px-7
                transition duration-500 border-2 border-bg-shade bg-dark-grey hover:bg-grey hover:text-dark-grey  text-center font-bold "
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              {/* <div className="transition duration-500 hover:bg-grey w-full h-full flex items-center justify-center font-montserrat px-10"> */}
              Learn more
              {/*  </div> */}
            </AnchorLink>
          </motion.div>
        </div>
      </div>

      {/*  SPHERE SECTION */}
      <div className="absolute right-5 bottom-1 h-60 w-[200px]">
        <Canvas className="">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0} />
          <directionalLight position={[0, -10, -1]} intensity={0.9} />
          <Sphere />
        </Canvas>
      </div>
      <div className="absolute left-16 bottom-36 w-[100px]">
        <Canvas className="">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0} />
          <directionalLight position={[0, -10, -3]} intensity={0.9} />
          <Sphere2 />
        </Canvas>
      </div>
    </section>
  );
};

export default Landing;
