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

// Page Sections
const pageSections = ["home", "skills", "projects", "contact"];

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

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
      <div className="mx-auto md:h-screen relative z-10">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
        {/*     <div className="spacer layer1"></div> */}
      </div>
      <div className="w-full h-0.5 bg-red"></div>
      {/* <LineGradient /> */}

      <div className="mx-auto md:h-full relative z-10">
        {/*  <div className="spacer layer4 reverse"></div> */}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <MySkills />
        </motion.div>
        <div className="spacer layer2"></div>
      </div>
      <div className="w-full h-0.5"></div>
      {/*     <LineGradient /> */}

      <div className="mx-auto relative z-10">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects />
        </motion.div>
        <div className="spacer layer3"></div>
      </div>
      <div className="w-full h-0.5"></div>
      {/*     <LineGradient /> */}

      {/*   TESTIMONIALS SECTION */}
      {/*       <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("testimonials")}
        >
          <Testimonials />
        </motion.div>
      </div>
      <LineGradient /> */}
      <div className="w-5/6 mx-auto md:h-screen">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
