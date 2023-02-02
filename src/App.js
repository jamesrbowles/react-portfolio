import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* FIX Z-INDEX of DOTGROUP - probs have to create a div for all the sections put it inside with them */

// hooks
import useMediaQuery from "./hooks/useMediaQuery";

// custom components
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Testimonials from "./scenes/Testimonials";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import SocialMediaIcons from "./components/SocialMediaIcons";

// Page Sections
const pageSections = ["home", "projects", "skills", "contact"];

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [projectsBtnActive, setProjectsBtnActive] = useState(false);
  const [skillFan, setSkillFan] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  /*   Function for activating Projects line animation */
  const handleProjectsBtn = () => {
    setProjectsBtnActive(true);
    setSelectedPage("projects");
  };

  const handleSkillFan = () => {
    setSkillFan(!skillFan);
  };

  /*   Logic for navbar if user at top of screen */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue relative pb-30">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        pageSections={pageSections}
      />
      {isAboveMediumScreens && (
        <DotGroup
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          pageSections={pageSections}
        />
      )}
      {/* LANDING PAGE */}
      <div className="mx-auto md:h-screen relative z-10">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing
            setSelectedPage={setSelectedPage}
            handleProjectsBtn={handleProjectsBtn}
            projectsBtnActive={projectsBtnActive}
          />
        </motion.div>
      </div>

      {/*  DIVIDER */}
      <div className="w-11/12 h-1 mx-auto bg-green divider"></div>

      {/* PROJECTS */}
      <div className="mx-auto relative z-10">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects />
        </motion.div>
      </div>

      {/*  DIVIDER */}
      <div className="w-11/12 h-1 mx-auto bg-green divider"></div>

      {/* SKILLS */}
      <div className="mx-auto md:h-full relative z-10">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <MySkills skillFan={skillFan} handleSkillFan={handleSkillFan} />
        </motion.div>
        {/*  guide for fan on skills */}
        {/* <div className="added-plus2"></div> */}
      </div>

      {/*  DIVIDER */}
      <div className="w-11/12 h-1 mx-auto bg-green divider"></div>

      <div className="w-5/6 mx-auto md:h-screen">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>
      <div className="fixed bottom-7 left-4 z-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -5 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
