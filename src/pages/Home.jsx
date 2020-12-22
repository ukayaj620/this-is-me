import Profile from '../components/Profile';
import SocialIcon from '../components/SocialIcon';
import personal from '../constants/personal';

const ProfileSection = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse items-center justify-center mx-8">
      <Profile />
      <div className="flex flex-col lg:mr-8">
        <h1>{personal.profile.header}</h1>
        <h4 className="lg:w-120 text-center lg:text-justify mt-8 mb-4">
          {personal.profile.content}
        </h4>
        <div className="flex flex-row justify-center lg:justify-start">
          {personal.socialInfo.map(({ icon, url }, index) => (
            <SocialIcon
              icon={icon}
              url={url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const Home = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <ProfileSection />
    </div>
  );
};

export default Home;
