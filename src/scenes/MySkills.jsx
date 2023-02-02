import React from "react";
import { motion } from "framer-motion";

// hooks
import useMediaQuery from "../hooks/useMediaQuery";

// custom components
import LineGradient from "../components/LineGradient";
import CardSkills from "../components/CardSkills/CardSkills";

// skills
import skills from "../components/CardSkills/skills";

const MySkills = ({ skillFan, handleSkillFan }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="sm:flex py-10 md:h-full mx-24 z-10">
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
            However apart from this knowledge, I have strong problem-solving
            skills and the ability to troubleshoot complex issues, with a robust
            sense of determination and ability to never give up until finding a
            solution.
          </p>
        </motion.div>
      </div>
      {/* SKILLS */}

      <div
        className={
          skillFan
            ? "skills-container skills-container-fan"
            : "skills-container"
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

{
  /*  <div className="md:flex md:justify-between mt-16 gap-32"> 
       EXPERIENCE 
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-montserrat font-semibold text-5xl">01</p>
              <p className="font-montserrat font-semibold text-3xl mt-3">
                Analytic
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Strong problem-solving skills and ability to troubleshoot complex
            issues, with a robust sense of determination and ability to never
            give up until finding a solution.
          </p>
        </motion.div>
        INNOVATIVE 
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-montserrat font-semibold text-5xl">02</p>
              <p className="font-montserrat font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            A auctor pharetra hendrerit mattis amet etiam interdum platea. Est
            morbi porttitor scelerisque fermentum, sagittis non egestas. Amet
            odio sit sagittis,
          </p>
        </motion.div>
       IMAGINATIVE 
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-montserrat font-semibold text-5xl">03</p>
              <p className="font-montserrat font-semibold text-3xl mt-3">
                Interpersonal
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-green absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Excellent communication skills with the ability to work well in a
            team.
          </p>
        </motion.div>
      </div> */
}
