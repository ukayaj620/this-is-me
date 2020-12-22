import { icons } from '../helpers/loader';

const SocialIcon = ({ icon, url }) => {
  return (
    <a
      className="mx-2 w-6 lg:w-8 transform duration-100 hover:scale-125 hover:-translate-y-1 bg-transparent"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={icons(icon)}
        className="w-6 lg:w-8"
      />
    </a>
  );
};

export default SocialIcon;
