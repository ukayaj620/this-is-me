import { icons } from '../helpers/loader';

const SocialIcon = ({ icon, url }) => {
  return (
    <a
      className="mx-3 w-8 lg:w-10 transform duration-100 hover:scale-125 hover:-translate-y-1 bg-transparent"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={icons(icon)}
        alt={`${icon}-${url}`}
        className="w-8 lg:w-10"
      />
    </a>
  );
};

export default SocialIcon;
