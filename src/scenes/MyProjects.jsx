import { motion } from "framer-motion";
import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const MyProjects = () => {
  const [selectedFilter, setFilter] = useState("All");
  const filters = ["All", "CS", "Art"];
  const projects = [
    {
      title: "Things With You",
      subtitle: "Full-Stack Web App",
      type: "cs",
      description:
        "Full-stack web application enabling users to create collaborative bucket lists with their significant other or friends. Supports Google authentication and collaboration.",
      technologies: [
        "JavaScript  ",
        "HTML/CSS ",
        "MongoDB ",
        "ExpressJS ",
        "Google OAuth",
      ],
      image: "/assets/thingswithyou.png",
    },
    {
      title: "Popcorn App",
      subtitle: "Cross Platform Mobile App",
      type: "cs",
      description:
        "Cross-platform mobile app displaying movie showtimes. Made with React Native & Expo.",
      technologies: [
        "JavaScript ",
        "HTML/CSS ",
        "React Native ",
        "Expo ",
        "Box Office API",
      ],
      image: "assets/popcorna.png",
    },
  ];

  const filteredProjects = projects.filter(
    (project) => project.type === selectedFilter.toLowerCase()
  );

  const projectsToUse = selectedFilter === "All" ? projects : filteredProjects;

  return (
    <section id="projects" className="pt-32 pb-24">
      <motion.div
        className="md:w-1/3 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {/* Page Title (Projects) */}
        <div>
          <p className="font-helvetica font-semibold text-4xl mb-10 text-light-grey">
            <span className="text-yellow font-source text-lg">0.2 </span>
            MY <span className="text-light-blue">PROJECTS</span>
          </p>
        </div>
      </motion.div>

      {/* Filter Buttons */}
      {/* <motion.div
        className="md:w-1/3 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="flex justify-center">
          {filters.map((item, index) => (
            <button
              onClick={() => setFilter(item)}
              class="bg-deep-blue focus:bg-blue hover:bg-yellow text-white font-semi-bold py-2 px-4 mx-1 my-3 rounded-full"
            >
              {item}
            </button>
          ))}
        </div>
      </motion.div> */}

      {/* Project cards */}
      <motion.div
        className="mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.0 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div class="">
          {projectsToUse.map((project) => (
            <div class="flex flex-row my-5">
              <a href="#!">
                <div
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "350px",
                    width: "500px",
                  }}
                />
              </a>
              <div class="p-6 mx-6 flex flex-col justify-center ">
                <h5 class="text-yellow font-source"> {project.subtitle} </h5>

                <h5 class="mb-2 text-3xl font-helvetica font-semibold leading-tight text-white">
                  {project.title}
                </h5>
                <p class="mb-4 text-base  text-light-blue font-helvetica font-light">
                  {project.description}
                </p>
                <div class="font-source text-sm flex flex-row space-x-5 flex-wrap text-white">
                  {project.technologies.map((technology, index) => (
                    <div span={index}>{technology}</div>
                  ))}
                </div>
                {/* <button
                  type="button"
                  class="inline-block rounded bg-blue px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  {project.type}
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MyProjects;
