import { images } from '../helpers/loader';

const Profile = () => {
  return (
    <div className="m-8">
      <img
        className="profile"
        src={images('profile')}
        alt="Jayaku Briliantio's face"
      />
    </div>
  );
};

export default Profile;
