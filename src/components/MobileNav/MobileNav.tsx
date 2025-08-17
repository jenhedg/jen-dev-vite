
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav';
import ThemeToggle from '../ThemeToggle/ThemeToggle';


import "./MobileNav.css";
import "../Nav/Nav.css";
import "../Logo/Logo.css";
import "../ThemeToggle/ThemeToggle.css";


export default function MobileNav() {
  const [navMobileActiveClass, setNavMobileActiveClass] = useState('mobile-nav')
  const [burgerActiveClass, setBurgerActiveClass] = useState('burger')

  const toggleBurgerActiveClass = () => {
    if (burgerActiveClass === "burger") {
      setNavMobileActiveClass("mobile-nav active")
      setBurgerActiveClass("burger active")

    } else {
      setNavMobileActiveClass("mobile-nav")
      setBurgerActiveClass("burger")
    }
  }

  return (
    <div className={navMobileActiveClass}>
      <button
        onClick={() => { toggleBurgerActiveClass() }}
        className={burgerActiveClass}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
        <Logo/>
        <Nav />
        <ThemeToggle/>
    </div >
  );
}