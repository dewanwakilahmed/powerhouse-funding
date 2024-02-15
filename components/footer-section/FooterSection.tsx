'use client';

import { FC } from 'react';
import Link from 'next/link';

// CSS Import
import './footer-section.css';

// Icon Imports
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';

const Footer: FC = () => {
  return (
    <footer className='footer-section'>
      <div className='footer-bg-overlay' />

      <div className='footer-content'>
        <div className='company-info'>
          <div className='company-logo-footer'>
            <Link href='/'>POWERHOUSE FUNDING</Link>
          </div>

          <address className='company-info-item'>
            <HiOutlineBuildingOffice className='company-info-icon' />
            <span className='company-info-text'>
              5th floor, 80 Broad Street,
            </span>
            <span className='company-info-text'>New York - 10004, USA</span>
          </address>
          <div className='company-info-item'>
            <AiOutlinePhone className='company-info-icon' />
            <a className='company-info-text' href='tel:1234567890'>
              (123) 456-7890
            </a>
          </div>
          <div className='company-info-item'>
            <AiOutlineMail className='company-info-icon' />
            <a className='company-info-text' href='mailto:email@example.com'>
              info@powerhousefunding.net
            </a>
          </div>
        </div>

        <div className='copyright'>
          <span className='copyright-company'>
            &copy; {new Date().getFullYear()} Powerhouse Funding.
          </span>
          <span className='copyright-message'>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
