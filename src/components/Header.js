import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';
import hamburger from '../images/hamburger.png';

function Header(props) {
  const {
    email,
    isLoggedIn,
    isMenuOpen,
    closeMenu,
    openMenu,
    handleLogout
  } = props;

  const currentPath = useLocation().pathname;

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="header logo" />
      {
        isLoggedIn ?
          <>
            <Link to='/signin' className={`header__link`} onClick={handleLogout}>{email} Log out</Link>
            {
              isMenuOpen ?
                <button className="menu__close" type="button" onClick={closeMenu}>&#10005;</button> :
                <img className="header__hamburger" src={hamburger} alt="hamburger menu" onClick={openMenu} />
            }
          </> :
          <>
            {
              (currentPath === "/signin") ?
                <Link to='/signup' className={`header__link header__link_type_no-log`}>Sign up</Link> :
                <Link to='/signin' className={`header__link header__link_type_no-log`}>Log in</Link>
            }
          </>

      }
    </header >
  );
}

export default Header;