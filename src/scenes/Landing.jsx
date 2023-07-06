import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";
import Typewriter from "typewriter-effect";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="mh"
      className="md:flex md:justify-between md:items-center px-10 md:h-full gap-16 py-5"
    >
      {/* Image
      <div className="md:order-1 flex justify-left basis-2/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <img
            style={{ width: "400px" }}
            alt="profile"
            className="hover:filter hover:scale-110 transition duration-500 z-10 w-full
                                max-w-[400px] md:max-w-[600px]"
            // when hovering over image, give it filter of saturatio of 200%
            src="assets/headshot-2023.jpg"
          />
        ) : (
          <img
            alt="profile"
            className="hover:filter hover:scale-110 transition duration-500 z-10 w-full
                            max-w-[400px] md:max-w-[600px]"
            // when hovering over image, give it filter of saturatio of 200%
            src="assets/headshot-2023.jpg"
          />
        )}
      </div> */}

      {/* main section */}
      <div className="z-30 basis-5/6 mt-12 md:mt-16">
        {/* headings */}
        <p className="text-2xl font-source z-10 py-7 text-center md:text-start text-yellow">
          Hi! My name is
          {/* <span>
            <Typewriter
              onInit={(typewriter) =>
                typewriter
                  .pauseFor(100)
                  .typeString("Hi!")
                  .pauseFor(600)
                  .typeString(" My name is")
                  .start()
              }
            />
          </span> */}
        </p>

        <p className="text-7xl font-helvetica font-semibold z-10 py-3 text-center md:text-start text-white">
          Mai Hoang.
        </p>
        <p className="text-6xl font-helvetica font-semibold z-10 text-center md:text-start text-light-blue">
          I want to build technology for social good.
        </p>
        <motion.div
          initial="hidden" // when we start
          whileInView="visible" // when u scroll to this section where this div is shown on screen, then run animation
          viewport={{ once: true, amount: 0.5 }} // will run animation once, 50% of div has to be visible on screen for animation to run
          transition={{ duration: 0.5 }} // half a second for animation to occur
          variants={{
            // actual animation
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }, // once div is in view, go from opacity of 0 to opacity of 1, go from x: 50 to x: 0
          }}
        ></motion.div>

        <p className="mt-10 mb-7 font-helvetica font-light text-lg md:text-start text-deep-blue">
          I'm based in the Bay Area, where I study Computer Science at Stanford
          University. I'm broadly interested in education, psychology/cognition,
          and artificial intelligence. Currently, I'm working at{" "}
          <span className="text-yellow hover:underline">
            <a href="https://rivervalleyirregulars.com/">
              River Valley Irregulars
            </a>
          </span>
          , an EdTech startup in Singapore.
        </p>

        {/* <p className="mt-10 mb-7 text-lg text-center md:text-start text-deep-blue">
          I want to build technology that is{" "}
          <span className="text-yellow">human centered </span> and{" "}
          <span className="text-yellow">uplifts marginalized communities</span>{" "}
          rather than being driven by profit and efficiency.
        </p> */}

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            // actual animation
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }, //
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
