
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav';

import "./MobileNav.css";
import "../Nav/Nav.css";
import "../Logo/Logo.css";


export default function MobileNav() {
  const [navMobileActiveClass, setNavMobileActiveClass] = useState('mobile-nav')
  const [burgerActiveClass, setBurgerActiveClass] = useState('burger')

  const toggleNavMobileActiveClass = () => {
    if (navMobileActiveClass === "mobile-nav") {
      setNavMobileActiveClass("mobile-nav active")
    } else {
      setNavMobileActiveClass("mobile-nav")
    }
  }

  const toggleBurgerActiveClass = () => {
    if (burgerActiveClass === "burger") {
      setBurgerActiveClass("burger active")
    } else {
      setBurgerActiveClass("burger")
    }
  }

  return (
    <div
      onClick={() => {toggleNavMobileActiveClass() }}
      className={navMobileActiveClass}
    >
      <button
        onClick={() => { toggleBurgerActiveClass() }}
        className={burgerActiveClass}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
        <Logo/>
        <Nav />
    </div >
  );
}