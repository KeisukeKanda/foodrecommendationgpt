// src/components/Header.js
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-amber-500">
      <div className='container mx-auto px-4 py-2 flex flex-wrap items-center justify-between'>
        <Link href="/" legacyBehavior>
          <a onClick={() => setIsMenuOpen(false)} className='text-2xl font-semibold text-zinc-900'>HealME</a>
        </Link>
        <button
          className="text-zinc-900 lg:hidden"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <nav className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} fixed right-0 top-10 w-min bg-amber-500 z-10 lg:static lg:w-auto lg:bg-transparent justify-end`}>
          <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 text-lg p-4 lg:p-0">
            <li>
              <Link href="/" legacyBehavior>
                <a className="block py-1 hover:text-amber-700" onClick={() => setIsMenuOpen(false)}>HOME</a>
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior>
                <a className="block py-1 hover:text-amber-700" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
              </Link>
            </li>
            <li>
              <Link href="/calculation" legacyBehavior>
                <a className="block py-1 hover:text-amber-700" onClick={() => setIsMenuOpen(false)}>CALCULATION</a>
              </Link>
            </li>
            <li>
              <Link href="/prompt" legacyBehavior>
                <a className="block py-1 hover:text-amber-700" onClick={() => setIsMenuOpen(false)}>PROMPT</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
