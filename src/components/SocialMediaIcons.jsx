const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/maihoanng/"
        target="_blank"
        rel="noreferrer" // prevent security issue for older browsers?
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/maihoanng"
        target="_blank"
        rel="noreferrer" // prevent security issue for older browsers?
      >
        <img class="w-8" alt="github-link" src="../assets/github2.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
