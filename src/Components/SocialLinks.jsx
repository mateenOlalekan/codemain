import { FaFacebookF, FaTwitter, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook" },
  { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
  { href: "https://wa.me/2349130199317?text=Hi%20there!%20I'm%20interested%20in%20your%20web%20app.", icon: <FaWhatsapp />, label: "WhatsApp" },
  { href: "https://github.com/mateenOlalekan/", icon: <FaGithub />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/abdul-matin-bayorblack-648003238/", icon: <FaLinkedin />, label: "LinkedIn" },
];

const SocialLinks = () => {
  return (
    <div className="flex flex-col items-center space-y-6 lg:space-y-8">
      {socialLinks.map(({ href, icon, label }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-lg border-2  bg-blue-500 hover:text-blue-500 hover:shadow-lg duration-500 shadow-lg hover:border-2 border-blue-500 hover:bg-white p-3 rounded-full inline-flex items-center gap-2"
          title={label}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
