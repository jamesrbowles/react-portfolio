import { FaGithub } from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <div className="">
      <a
        href="https://github.com/jamesrbowles"
        target="_blank"
        rel="noreferrer"
        className="opacity-50 hover:opacity-100 transition duration-500 text-4xl"
      >
        <FaGithub />
      </a>
      {/*  <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500"
      >
        <img src="../assets/twitter.png" alt="twitter-link" />
      </a>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500"
      >
        <img src="../assets/facebook.png" alt="facebook-link" />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500"
      >
        <img src="../assets/instagram.png" alt="instagram-link" />
      </a> */}
    </div>
  );
};

export default SocialMediaIcons;
