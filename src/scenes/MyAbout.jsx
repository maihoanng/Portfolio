import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MyAbout = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="about" className="pt-28">
      {/* Image */}
      <div className="md:order-2 flex justify-left md:mt-32 ">
        {isAboveMediumScreens ? (
          <img
            style={{
              borderRadius: "50%",
              maxWidth: "250px",
              width: "100%",
              maxHeight: "250px",
            }}
            alt="profile"
            className="hover:filter hover:scale-110 transition duration-500 z-10
                                max-w-[400px] md:max-w-[600px]"
            // when hovering over image, give it filter of saturatio of 200%
            src="assets/sunset-cliffs.png"
          />
        ) : (
          <img
            alt="profile"
            className="hover:filter hover:scale-110 transition duration-500 z-10 w-full
                            max-w-[100px] md:max-w-[200px]"
            // when hovering over image, give it filter of saturatio of 200%
            src="assets/sunst-cliffs.png"
          />
        )}

        <motion.div
          className="md:w-2/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            // actual animation
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 65, y: 10 }, //
          }}
        >
          <p className="font-helvetica font-semibold text-4xl mb-5 text-white">
            <span className="text-yellow font-source text-lg">0.1 </span>
            ABOUT <span className="text-light-blue">ME</span>
          </p>
          <h4
            style={{ fontSize: "18px" }}
            className="text-2xl font-helvetica font-light text-deep-blue"
          >
            Hi again! My name is Mai. I'm a developer with a passion for
            designing and building technology that enhances the lives of
            individuals and society as a whole, rather than being driven by
            profit and efficiency.
          </h4>
          <br />
          <p
            style={{
              fontSize: "18px",
            }}
            className=" text-deep-blue font-helvetica font-light"
          >
            Right now, I am focused on building accessible digital experiences
            for underserved youth in Singapore at{" "}
            <span className="text-yellow hover:underline">
              <a href="https://rivervalleyirregulars.com/">
                River Valley Irregulars
              </a>
            </span>
            .
          </p>
          <p>
            <br />
          </p>
          <p style={{ fontSize: "18px" }} className="text-white font-light"></p>
        </motion.div>
      </div>
      <div className="md:flex md:justify-end md:gap-16 mt-32"></div>
    </section>
  );
};

export default MyAbout;
