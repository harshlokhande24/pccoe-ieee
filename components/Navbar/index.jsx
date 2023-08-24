import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';

// React Icons
import { IoIosArrowForward } from 'react-icons/io';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const close_menu = () => {
    if (!menuOpen) {
      setMenuOpen(menuOpen);
      menuOpen = true;
    } else {
      setMenuOpen(!menuOpen);
      menuOpen = false;
    }
  }

  return (
    <div className="pb-6 flex justify-between items-center md:pb-8">
        <div className="z-50">
          <Link href="/">
            <a title="IEEE - ITSA">
              <img src="/logo_dark_mode.webp" alt="IEEE Logo" className="max-w-2xl w-40 m-0" />
            </a>
          </Link>
        </div>
        <nav className="flex justify-center items-center gap-4">
          <ul className={`menu text-dark z-40 absolute left-0 top-0 w-full h-screen bg-purple flex flex-col justify-center items-center gap-12 sm:relative sm:w-unse sm:h-auto sm:bg-white  sm:flex sm:flex-row ${styles.menu} ${menuOpen ? `${styles.open}` : ""}`}>
            <li title="Home">
              <Link href="/">
                <a className="text-md text-light font-semibold" onClick={() => close_menu()}>Home</a>
              </Link>
            </li>
            <li title="About">
              <Link href="/about">
                <a className="text-md text-dark font-semibold" onClick={() => close_menu()}>About</a>
              </Link>
            </li>
            <li title="Talks">
              <Link href="/team">
                <a className="text-md text-dark font-semibold" onClick={() => close_menu()}>Our Team</a>
              </Link>
            </li>
            <li title="Talks">
              <Link href="/mentor">
                <a className="text-md text-dark font-semibold" onClick={() => close_menu()}>Mentors</a>
              </Link>
            </li>
            <li>
              <Link href="/feedback">
                <a title="Update Me" className="flex justify-center items-center gap-1 w-max m-auto py-2 px-4 bg-black text-white text-sm font-semibold rounded-full active:scale-95 md:text-md" onClick={() => close_menu()}>
                    <span>Feedback</span>
                    <span><IoIosArrowForward /></span>
                </a>
              </Link>
            </li>
          </ul>
          <div className={`hamburger flex flex-col justify-center items-center z-50 sm:hidden ${styles.hamburger} ${menuOpen ? `${styles.open}` : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span className="h-0.5 w-8 bg-black mb-2 duration-150 ease-in-out"></span>
            <span className="h-0.5 w-8 bg-black mb-2 duration-150 ease-in-out"></span>
            <span className="h-0.5 w-8 bg-black duration-150 ease-in-out"></span>
          </div>
        </nav>
    </div>
  )
}

export default Navbar;