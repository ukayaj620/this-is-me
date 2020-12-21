import { images } from '../helpers/loader';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <img
        className="w-52 h-52 rounded-full"
        src={images('profile')}
      />
    </div>
  );
};

export default Home;
