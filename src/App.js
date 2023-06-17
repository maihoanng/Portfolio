import { useEffect, useState } from "react";
import Landing from "./scenes/Landing";
import DotGroup from "./scenes/DotGroup";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import LineGradient from "./components/LineGradient";
import MyAbout from "./scenes/MyAbout";
import MyProjects from "./scenes/MyProjects";
import MyWriting from "./scenes/MyWriting";
import MyResume from "./scenes/MyResume";

function App() {
  const [selectedPage, setSelectedPage] = useState("mh");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar selectedpage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreen && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <div className="w-5/6 mx-auto md:h-full">
        <MyAbout
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
      <div className="w-5/6 mx-auto">
        <MyProjects
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
      <div className="w-5/6 mx-auto md:h-full">
        <MyWriting
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
    </div>
  );
}

export default App;
