import { Link, useLocation } from 'react-router-dom';
import { icons } from '../helpers/loader';

const NavIcons = ({ icon, path, active }) => {
  const _determineIcon = (icon, active) => active ? `${icon}-active` : icon;

  return (
    <Link
      className={`nav-icon ${active ? 'active' : 'non-active'}`}
      to={path}
    >
      <img
        className="w-8 lg:w-10"
        src={icons(_determineIcon(icon, active))}
        alt={`${icon}-${path}`}
      />
    </Link>
  );
}

const NavBar = () => {
  const _location = useLocation();
  const _determineIsActive = path => path === _location.pathname;

  return (
    <div className="nav-bar z-10">
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
