import { images } from '../helpers/loader';

const Profile = () => {
  return (
    <div className="m-8 rounded-full shadow-xl profile flex-shrink-0">
      <img
        className="profile"
        src={images('profile')}
        alt="Jayaku Briliantio's face"
      />
    </div>
  );
};

export default Profile;
