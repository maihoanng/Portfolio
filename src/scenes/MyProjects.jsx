import { motion } from "framer-motion";
import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const MyProjects = () => {
  const [selectedFilter, setFilter] = useState("All");
  const filters = ["All", "CS", "Art"];
  const projects = [
    {
      title: "Sudoku Solver",
      type: "cs",
      description: "C++ program to solve any valid Sudoku puzzle.",
      image: "assets/Sudoku.png",
    },
    {
      title: "Popcorn App",
      type: "cs",
      description:
        "Cross-platform app displaying movie showtimes. Made with React Native & Expo.",
      image: "assets/popcorn.png",
    },
    {
      title: "Autumn Painting",
      type: "art",
      description: "A road in autumn. Materials: acrylic on canvas.",
      image: "assets/autumn3.png",
    },
    {
      title: "Butterfly Crochet Top",
      type: "art",
      description: "materials: yarn, 4 mm crochet hook",
      image: "assets/butterfly-top.jpg",
    },
    {
      title: "Spirited Away",
      type: "art",
      description: "gouache on cardstock",
      image: "assets/spirited-away.jpg",
    },
    {
      title: "Wildflower Embroidery",
      type: "art",
      description: "thread",
      image: "assets/floral-embroidery.jpg",
    },
  ];

  const filteredProjects = projects.filter(
    (project) => project.type === selectedFilter.toLowerCase()
  );

  const projectsToUse = selectedFilter === "All" ? projects : filteredProjects;

  return (
    <section id="projects" className="pt-24 pb-24">
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
          <p className="font-playfair font-semibold text-4xl mb-5 text-deep-blue">
            MY <span className="text-red">PROJECTS</span>
          </p>
        </div>
      </motion.div>

      {/* Filter Buttons */}
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
      </motion.div>

      {/* Project cards */}
      <motion.div
        className="mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.0 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div class="grid grid-cols-3 gap-5 py-5">
          {projectsToUse.map((project) => (
            <div class="block rounded-lg mx-2 my-2 bg-white shadow-lg hover:scale-110 dark:bg-deep-blue">
              <a href="#!">
                <div
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "330px",
                    width: "100%",
                  }}
                />
              </a>
              <div class="p-6">
                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  {project.title}
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  {project.description}
                </p>
                <button
                  type="button"
                  class="inline-block rounded bg-blue px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  {project.type}
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MyProjects;
