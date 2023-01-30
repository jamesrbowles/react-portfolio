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

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="py-10 mx-24 h-full relative">
      {/*  MAIN SECTION */}
      <div className="md:flex md:flex-col md:justify-start z-30 mt-12 md:mt-32 w-3/4">
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
          <p className="text-6xl font-leagueSpartan z-10 text-center md:text-start">
            James Bowles
          </p>
          <p className="mt-10 mb-7 text-sm text-center md:text-start z-30 text-grey font-montserrat">
            Front-end engineer specialising in JavaScript and ReactJS. Take a
            deep dive into my portfolio to learn a little more.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
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
            className="rounded-sm py-3 px-7
                transition duration-500 border-2 border-bg-shade hover:bg-grey"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm py-0.5 pr-0.5 border-2 border-bg-shade "
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="transition duration-500 hover:bg-grey w-full h-full flex items-center justify-center font-montserrat px-10">
              Learn more
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
      {/*  SPHERE SECTION */}
      <div className="md:order-2 absolute right-8 bottom-8 h-80 w-2/5">
        <Canvas className="-z-50">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Sphere />
        </Canvas>
      </div>
    </section>
  );
};

export default Landing;
