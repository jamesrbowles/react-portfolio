import React from 'react';
import { motion } from 'framer-motion';

// hooks
import useMediaQuery from '../hooks/useMediaQuery';

// custom components
import LineGradient from '../components/LineGradient';
import CardSkills from '../components/CardSkills/CardSkills';

// skills
import skills from '../components/CardSkills/skills';

const MySkills = ({ skillFan, handleSkillFan }) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <section
      id="skills"
      className="sm:flex py-10 md:h-full sm:mx-24 mx-16 z-10"
    >
      {/*  HEADER AND IMAGE SECTION */}
      <div className="basis-1/3 text-center mt-16">
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-leagueSpartan font-semibold sm:text-5xl text-4xl">
            SKILLS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
          <p className="text-center font-montserrat sm:text-left mt-10 ">
            As a constantly evolving self-taught web developer I have managed to
            acquire a number of skills in various different front-end languages
            and frameworks.
            <br></br>
            <br></br>
            However apart from this technical know-how, I have strong
            problem-solving skills and the ability to troubleshoot complex
            issues, with a robust sense of determination and ability to never
            give up until finding the right way forward.
            <br></br>
            <br></br>
            The bottom line is whatever your problem, I'll get to the solution.
          </p>
        </motion.div>
      </div>
      {/* SKILLS */}

      <div
        className={
          skillFan
            ? 'skills-container skills-container-fan'
            : 'skills-container'
        }
      >
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {skills.map((skill) => {
            const { name, img, logoColor, bgColor } = skill;
            return (
              <CardSkills
                key={name}
                name={name}
                img={img}
                logoColor={logoColor}
                bgColor={bgColor}
                skillFan={skillFan}
                handleSkillFan={handleSkillFan}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
