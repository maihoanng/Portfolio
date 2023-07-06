import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        href="#mh"
        className={`${
          selectedPage === "mh" ? selectedStyles : "bg-white"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("mh")}
      />

      <AnchorLink
        href="#about"
        className={`${
          selectedPage === "about" ? selectedStyles : "bg-white"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("about")}
      />

      <AnchorLink
        href="#projects"
        className={`${
          selectedPage === "projects" ? selectedStyles : "bg-white"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("projects")}
      />
    </div>
  );
};

export default DotGroup;
