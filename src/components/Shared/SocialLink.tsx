import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const SocialLink = () => {
  return (
    <div className="flex gap-5 mt-5 relative">
      <a
        href="https://github.com/mranonno"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub
          size={24}
          className="hover:-translate-y-2 transition-transform duration-300 text-gray-500 hover:text-fuchsia-700"
        />
      </a>

      <a
        href="https://www.linkedin.com/mranonno1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn
          size={24}
          className="hover:-translate-y-2 transition-transform duration-300 text-gray-500 hover:text-fuchsia-500"
        />
      </a>
      <a href="mailto:anonnodas97@gmail.com">
        <FiMail
          className="hover:-translate-y-2 transition-transform duration-300 text-gray-500 hover:text-fuchsia-700"
          size={24}
        />
      </a>
      <a
        href="https://www.instagram.com/mranonno1/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDiscord
          size={24}
          className="hover:-translate-y-2 transition-transform duration-300 text-gray-500 hover:text-fuchsia-700"
        />
      </a>

      <a
        href="https://www.instagram.com/mranonno1/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram
          size={24}
          className="hover:-translate-y-2 transition-transform duration-300 text-gray-500 hover:text-fuchsia-700"
        />
      </a>
    </div>
  );
};

export default SocialLink;
