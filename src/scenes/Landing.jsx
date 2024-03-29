import React from 'react';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Typewriter from 'typewriter-effect';

//hooks
/* import useMediaQuery from '../hooks/useMediaQuery'; */

//custom components
import Sphere from '../components/Sphere';
import Sphere2 from '../components/Sphere2';

const Landing = ({ setSelectedPage, handleProjectsBtn, projectsBtnActive }) => {
  /*   const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)'); */

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { type: 'spring', duration: 2.5, bounce: 0 },
          opacity: { duration: 0.01 },
        },
      };
    },
  };

  return (
    <section
      id="home"
      className="py-10 sm:mx-24 mx-16 h-screen relative"
    >
      {/*  HEADER SECTION */}
      <div className="relative top-1/4 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-5xl xs:text-6xl ss:text-7xl md:text-8xl font-leagueSpartan z-10 text-center uppercase font-extrabold">
            <span>I'm a</span>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('UI/UX')
                  .pauseFor(800)
                  .deleteAll()
                  .typeString('Designer')
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
              options={{
                loop: true,
              }}
            />
          </div>
          {/*      <p className="text-7xl sm:text-8xl md:text-9xl font-leagueSpartan z-10 text-center uppercase font-extrabold">
            Developer
          </p> */}
        </motion.div>
      </div>

      {/* TAGLINE & BUTTONS SECTION */}
      <div className="flex flex-col justify-center relative top-1/4 z-30  w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="text-base sm:text-lg md:text-xl mt-10 mb-7 text-center text-grey font-montserrat">
            <span className="text-white font-bold">Robert Bailey</span>{' '}
            <span className="mx-2">||</span>
            Designing Seamless Experiences: Merging Creativity with User-Centric
            Solutions
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <div className="w-1/2 mx-auto z-10">
          <motion.div
            className="flex mt-5 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <AnchorLink
              className="text-xl md:text-2xl basis-1/2 rounded-sm py-3 md:px-7 px-16
                transition duration-500 border-2 border-green/50 bg-dark-grey hover:bg-bg-shade hover:border-green active:bg-bg-shade active:border-green font-leagueSpartan text-center font-semibold tracking-wider uppercase"
              onClick={handleProjectsBtn}
              href="#projects"
            >
              See Projects
            </AnchorLink>
          </motion.div>
        </div>
        {projectsBtnActive && (
          <div className="parent mx-auto">
            <motion.svg
              className="project-line"
              viewBox="0 0 20 1000"
              initial="hidden"
              animate="visible"
            >
              <motion.line
                x1="10"
                y1="0"
                x2="10"
                y2="95%"
                stroke="#2cb67d"
                variants={draw}
              />
            </motion.svg>
          </div>
        )}
      </div>

      {/*  SPHERE SECTION */}
      <div className="absolute right-5 bottom-2 h-60 w-[200px]">
        <Canvas className="">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0} />
          <directionalLight
            position={[0, -10, -1]}
            intensity={0.9}
          />
          <Sphere />
        </Canvas>
      </div>
      <div className="absolute left-16 bottom-40 w-[100px]">
        <Canvas className="">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0} />
          <directionalLight
            position={[0, -10, -3]}
            intensity={0.9}
          />
          <Sphere2 />
        </Canvas>
      </div>
    </section>
  );
};

export default Landing;
