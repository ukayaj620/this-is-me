import Anchor from "../Anchor";

const PublicationCard = ({ title, author, doi, publisher, links }) => {
  return (
    <div className="w-full my-3 lg:px-6 py-2 flex flex-col items-center lg:items-start text-center lg:text-justify">
      <h3 className="text-base lg:text-xl">{title}</h3>
      <div className="flex flex-col lg:flex-row my-1">
        <Anchor
          url={publisher.url}
          text={publisher.name}
        />
        <h5 className="text-gray-500 font-semibold ml-2">[ {doi} ]</h5>
      </div>
      <h5 className="text-center text-gray-900 lg:mr-2 font-medium">Author: {author}</h5>
      <div className="flex w-full flex-row justify-end mt-1.5">
        {links.map(({ text, url }, index) => (
          <div className="ml-3">
            <Anchor
              url={url}
              text={text}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicationCard;
