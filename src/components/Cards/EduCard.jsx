import { images } from "../../helpers/loader";

const EduCard = ({ image, title, major, year, description }) => {
  return (
    <div className="w-full my-3 lg:px-6 py-2 flex flex-col lg:flex-row items-center">
      <img
        className="w-32 h-32 my-2 lg:mr-12"
        src={images(image)}
        alt={title}
      />
      <div className="flex flex-col justify-center items-center lg:items-start">
        <h3>{title}</h3>
        <div className="flex flex-col font-semibold my-1 items-center lg:items-start">
          <h5 className="text-center text-gray-900 lg:mr-2">{major}</h5>
          <h5 className="text-gray-500 font-semibold">[ {year} ]</h5>
        </div>
        <h5 className="text-center lg:text-justify text-gray-900">{description}</h5>
      </div>
    </div>
  );
};

export default EduCard;
