const ProjectSection = () => {
  return (
    <div className="flex flex-col w-4/5 items-center my-8">
      <div className="w-full flex flex-col items-center lg:items-end">
        <h2>My Projects</h2>
        <div className="w-24 h-1 bg-gray-900 rounded-lg mt-2 mb-4" />
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <ProjectSection />
    </div>
  );
};

export default Work;
