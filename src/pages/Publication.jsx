import PublicationCard from "../components/Cards/PublicationCard";
import personal from "../constants/personal";

const Publication = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col w-4/5 items-center my-8">
        <div className="w-full flex flex-col items-center lg:items-end">
          <h2>My Publications</h2>
          <div className="w-24 h-1 bg-gray-900 rounded-lg mt-2 mb-4" />
        </div>
        {personal().publicationInfo.map(({ title, author, doi, publisher, links }, index) => (
          <>
            <PublicationCard
              key={`#publication-${title}-${index}`}
              title={title}
              author={author}
              doi={doi}
              publisher={publisher}
              links={links}
            />
            <div className="separator" />
          </>
        ))}
      </div>
    </div>
  );
};

export default Publication;
