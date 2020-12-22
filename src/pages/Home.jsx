import Profile from '../components/Profile';
import SocialIcon from '../components/SocialIcon';
import personal from '../constants/personal';

const ProfileSection = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse items-center lg:items-stretch justify-center w-3/4 mt-8 lg:mt-16">
      <Profile />
      <div className="flex flex-col justify-center text-center lg:text-justify">
        <h1>{personal().profile.header}</h1>
        <h4 className="lg:w-120 mt-8 mb-4">
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
    <div className="flex flex-col w-3/4 items-center">

    </div>
  );
};

const Home = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <ProfileSection />
      <EducationSection />
    </div>
  );
};

export default Home;
