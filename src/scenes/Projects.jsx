import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle, href }) => {
  const overlayStyles = `absolute w-full h-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-4 md:p-16 text-deep-blue`;
  const projectTitle = title.split(' ').join('-').toLowerCase();

  return (
    <motion.div
      variants={projectVariant}
      className="relative max-w-[400px] max-h-[400px]"
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <div className={overlayStyles}>
          <p className="text-2xl font-montserrat">{title}</p>
          <p className="mt-7 project-sub">{subtitle}</p>
        </div>
        <img
          /* src={`../assets/${projectTitle}.jpg`} */
          src={`${process.env.PUBLIC_URL + '/assets/' + projectTitle + '.jpg'}`}
          alt={projectTitle}
        />
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="pt-24 pb-48 sm:mx-24 mx-16"
    >
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-leagueSpartan font-semibold sm:text-5xl text-4xl">
            PROJECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10 font-montserrat text-center">
          My projects are characterized by their attention to detail and
          user-centered approach. Browse below at some of my completed and
          ongoing work.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center z-20">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-purple
              max-w-[400px] max-h-[400px] text-2xl font-montserrat font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="Smart Home App"
            subtitle="Intuitive interface for controlling and managing modern smart home devices."
            href="/"
          />
          <Project
            title="Ecommerce"
            /* subtitle="This is a task app that focuses on priority built with React. As the user adds a task it gets added to the forefront of a deck of previously added tasks." */
            subtitle="Elevating shopping with stylish UI, seamless navigation, and secure transactions."
            href="/"
          />

          {/* ROW 2 */}
          <Project
            title="Time Tracker App"
            subtitle="Streamlining productivity with a minimalist design and precise time management."
            href="/"
          />
          <Project
            title="Photography Portfolio"
            subtitle="Showcasing the clients visual journey through captivating snapshots and creative storytelling."
            href="/"
          />
          <Project
            title="Photo Book"
            subtitle="Turning memories into tangible emotions through a beautifully designed visual narrative."
            href="/"
          />

          {/* ROW 3 */}

          <Project
            title="Beauty Salon"
            subtitle="Embracing elegance and serenity, merging design with a luxurious salon experience."
            href="/"
          />
          <Project
            title="3D Nature Display"
            subtitle="Immerse in nature's wonders through an interactive, captivating 3D showcase."
            href="/"
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-green
              max-w-[400px] max-h-[400px] text-2xl font-montserrat font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
