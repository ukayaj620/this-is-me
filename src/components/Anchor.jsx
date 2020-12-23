import { icons } from '../helpers/loader';

const Anchor = ({ url, text }) => {
  return (
    <div className="flex flex-row items-center">
      <a href={url}>
        <h5 className="hover:text-purple-800 text-center text-primary mr-1">
          {text}
        </h5>
      </a>
      <img
        src={icons('link')}
        alt={`link to ${url}`}
        className="w-4 h-4 lg:w-5 lg:h-5"
      />
    </div>
  );
};

export default Anchor;
