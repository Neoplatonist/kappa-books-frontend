import { useState } from 'react';
import Link from 'next/link';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  let mobileNavClass = isOpen ? "" : "xs:hidden";

  console.log(mobileNavClass);

  const handleMobileNav = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="l-header__nav">
      <Link href="/">
        <a className="c-logo">
          Logo Here
        </a>
      </Link>


      <div className="l-header-mobile__wrapper">
        <button
          className="c-header-mobile-nav"
          data-collapse-toggle="mobile-menu"
          type="button"
          onClick={handleMobileNav}
          aria-controls="mobile-menu-2"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>

          <svg className="c-header-mobile-nav__menu"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <ul className={["l-nav-list", mobileNavClass].join(" ")}>
          <li className="l-nav-list__item c-nav">
            <Link href="/login">
              <a className="c-nav__link">Log in</a>
            </Link>
          </li>

          <li className="l-nav-list__item c-nav">
            <Link href="/register">
              <a className="c-nav__link">Register</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
