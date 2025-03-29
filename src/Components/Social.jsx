import { FaFacebookF, FaTwitter, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook", color: "bg-blue-500" },
  { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter", color: "bg-blue-500" },
  { href: "https://wa.me/2349130199317?text=Hi%20there!%20I'm%20interested%20in%20your%20web%20app.", icon: <FaWhatsapp />, label: "WhatsApp", color: "bg-blue-500" },
  { href: "https://github.com/mateenOlalekan/", icon: <FaGithub />, label: "GitHub", color: "bg-blue-500" },
  { href: "https://www.linkedin.com/in/abdul-matin-bayorblack-648003238/", icon: <FaLinkedin />, label: "LinkedIn", color: "bg-blue-500" },
];

const SocialLinks = () => {
  return (
    <div className="flex flex-col  items-center gap-3 text-lg   ">
      {socialLinks.map(({ href, icon, label, color }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${color} text-white p-3 border-2 border-blue-500 rounded-full hover:bg-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:text-blue-500 hover:scale-110 transition-all duration-300`}
          title={label}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
