import EduCard from '../components/Cards/EduCard';
import Profile from '../components/Profile';
import SocialIcon from '../components/SocialIcon';
import personal from '../constants/personal';

const ProfileSection = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse items-center lg:items-stretch justify-between w-4/5 mt-8 lg:mt-4">
      <Profile />
      <div className="flex flex-col justify-center text-center lg:text-justify lg:mr-12">
        <h1>{personal().profile.header}</h1>
        <h4 className="lg:w-120 mt-10 mb-4">
          {personal().profile.content}
        </h4>
        <div className="lg:-ml-3 flex flex-row items-center justify-center lg:justify-start">
          {personal().socialInfo.map(({ icon, url }, index) => (
            <SocialIcon
              key={`icon-${icon}-${index}`}
              icon={icon}
              url={url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const EducationSection = () => {
  return (
    <div className="flex flex-col w-4/5 items-center my-8">
      <div className="w-full flex flex-col items-center lg:items-end">
        <h2>My Education</h2>
        <div className="w-24 h-1 bg-gray-900 rounded-lg mt-2 mb-4" />
      </div>
      <div className="w-full lg:w-4/5 flex flex-col items-end">
        {personal().educationInfo.map(({ image, title, year, major, description }, index) => (
          <>
            <EduCard
              key={`#edu-${title}-${index}`}
              image={image}
              year={year}
              major={major}
              title={title}
              description={description}
            />
            <div className="separator" />
          </>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <ProfileSection />
      <EducationSection />
    </div>
  );
};

export default Home;
