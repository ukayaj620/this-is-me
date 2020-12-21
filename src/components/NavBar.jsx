import { Link, useLocation } from 'react-router-dom';
import { icons } from '../helpers/loader';

const NavIcons = ({ icon, path, active }) => {
  const _determineIcon = (icon, active) => active ? `${icon}-active` : icon;

  return (
    <Link
      className={`flex rounded-2xl p-4 mx-4 lg:my-4 ${active ? 'bg-white' : 'bg-transparent'}`}
      to={path}
    >
      <img
        className="w-8 lg:w-10"
        src={icons(_determineIcon(icon, active))}
        alt={`${icon}-${active}`}
      />
    </Link>
  );
}

const NavBar = () => {
  const _location = useLocation();
  const _determineIsActive = path => path === _location.pathname;

  return (
    <div className="flex flex-row lg:flex-col justify-center items-center lg:w-32 w-screen h-24 lg:h-screen bg-primary rounded-b-xl lg:rounded-r-2xl">
      {NavList.map(({ icon, path }, index) => (
        <NavIcons
          key={`#nav-icon-${icon}-${index}`}
          icon={icon}
          path={path}
          active={_determineIsActive(path)}
        />
      ))}
    </div>
  );
};

const NavList = [
  {
    icon: 'about',
    path: '/',
  },
  {
    icon: 'work',
    path: '/work'
  },
  {
    icon: 'publication',
    path: '/publication'
  },
];

export default NavBar;
