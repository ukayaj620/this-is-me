import Anchor from "../Anchor";
import { images } from "../../helpers/loader";

const ProjectCard = ({ title, image, associated, tech, team, description, links }) => {
  return (
    <div className="w-full my-3 lg:px-8 py-2 flex flex-col lg:flex-row items-center">
      <img
        className="w-32 h-32 lg:w-40 lg:h-40 my-2 lg:mr-12 rounded-full"
        src={images(image)}
        alt={title}
      />
      <div className="flex flex-col justify-center items-center lg:items-start">
        <h3>{title}</h3>
        <div className="flex w-full flex-col mt-0.5 mb-2">
          <div className="flex w-full flex-row justify-center lg:justify-start">
            {associated.map(({ text, url }, index) => (
              <div
                key={`#anchor-${text}-${index}`}
                className="lg:mr-4"
              >
                <Anchor
                  url={url}
                  text={text}
                  bold
                />
              </div>
            ))}
          </div>
          {team && <h5 className="text-gray-500 font-medium text-center lg:text-left">Team: {team}</h5>}
        </div>
        <h5 className="text-center lg:text-justify text-gray-900 mb-1 font-medium">Tech used: {tech}</h5>
        <h5 className="text-center lg:text-justify text-gray-900">{description}</h5>
        <div className="flex w-full flex-row justify-end mt-2.5">
          {links.map(({ text, url }, index) => (
            <div className="ml-3">
              <Anchor
                key={`#anchor-${text}-${index}`}
                url={url}
                text={text}
                withLogo
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
