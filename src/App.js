import { useEffect, useState } from "react";
import Landing from "./scenes/Landing";
import DotGroup from "./scenes/DotGroup";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import MyAbout from "./scenes/MyAbout";
import MyProjects from "./scenes/MyProjects";
import { motion } from "framer-motion";

function App() {
  const [selectedPage, setSelectedPage] = useState("mh");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 2) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreen && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          margin="0 0 0 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("mh")}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 100px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("about")}
        >
          <MyAbout
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </motion.div>
      </div>
      <div className="w-3/4 mx-auto md:h-full">
        <motion.div
          margin="0 0 -500px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <MyProjects
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
