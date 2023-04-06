import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MyAbout = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="about" className="pt-10 pb-24">
      {/* Image */}
      <div className="md:order-2 flex justify-left mt-16 md:mt-32 ">
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
          <p className="font-playfair font-semibold text-4xl mb-5 text-deep-blue">
            ABOUT <span className="text-red">ME</span>
          </p>
          <h4 style={{ fontSize: "20px" }} className="text-2xl text-deep-blue">
            Hi again! My name is Mai Hoàng.
          </h4>
          <br />
          <p
            style={{
              fontSize: "18px",
            }}
            className=" text-deep-blue"
          >
            I was born in Vietnam and am currently based in the Bay Area. I'm
            passionate about building technology that serves to enhance the
            lives of individuals and society as a whole, rather than being
            purely driven by profit and efficiency. Right now at Stanford, I'm
            learning how to do just that. I'm a sophomore studying Symbolic
            Systems, combining computer science, psychology, philosophy, and
            linguistics to explore the ways in which humans and society interact
            with technology.
          </p>
          <p>
            <br />
          </p>
          <p style={{ fontSize: "18px" }} className="text-deep-blue">
            When I'm not coding or studying, you can find me crocheting,
            watching Modern Family, reading all kinds of books (especially
            philosophy and Asian American literature), or playing with my fat
            fluffy cat, Charlene!
          </p>
        </motion.div>
      </div>
      <div className="md:flex md:justify-end md:gap-16 mt-32"></div>
    </section>
  );
};

export default MyAbout;
