'use client';

import { FC, useState } from 'react';
import Link from 'next/link';

// CSS Import
import './header-section.css';

// UI Components Import
import DropdownMenu from '@/components/ui/DropdownMenu';
import Button from '@/components/ui/button/Button';
import SideMenu from '../ui/SideMenu';

// Icon Import
import { FiMenu } from 'react-icons/fi';

const HeaderSection: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='header-section'>
      <div className='header-content'>
        <div className='company-logo-header'>
          <Link href='/'>POWERHOUSE FUNDING</Link>
        </div>

        <nav className='navbar-side-menu'>
          <FiMenu
            className='side-menu-open-btn'
            onClick={() => setIsMenuOpen(true)}
          />
        </nav>

        <nav className='navbar'>
          <ul className='navbar-list'>
            <DropdownMenu />

            <li className='navbar-item'>
              <Link href='/contact-us'>Contact Us</Link>
            </li>

            <Button
              className='navbar-cta ml-6 hover:!text-neutral-50'
              btnType='primary'
              goTo='/apply-now'
            >
              Apply Now
            </Button>
          </ul>
        </nav>
      </div>

      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default HeaderSection;
