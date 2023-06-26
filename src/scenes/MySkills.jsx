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
      className="md:flex py-10 md:h-full md:mx-24 mx-16 z-10"
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
            As a Real Estate Web developer, I specialize in leveraging the
            latest and most advanced technologies to create exceptional
            websites. By utilizing Next.js and headless CMS platforms like
            Strapi, I develop websites that are not only fast and scalable but
            also highly secure. My focus on optimizing search engine performance
            ensures that my websites consistently achieve a perfect 100 score in
            SEO rankings.
            <br></br>
            <br></br>
            Beyond my technical expertise, I possess strong problem-solving
            skills and excel at troubleshooting complex issues. I approach
            challenges with a tenacious spirit, never giving up until I find the
            optimal solution. This determination drives me to continuously seek
            the right path forward, ensuring the success of every project I
            undertake.
            <br></br>
            <br></br>
            In summary, I combine cutting-edge technology, meticulous
            optimization, and unwavering problem-solving abilities to deliver
            outstanding Real Estate websites that exceed expectations.
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
