'use client';

import { FC, useState } from 'react';
import Link from 'next/link';

const DropdownMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className='navbar-item'
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(false)}
    >
      Financial Solutions
      {isOpen && (
        <ul className='dropdown-menu'>
          <li className='dropdown-item'>
            <Link href='/merchant-cash-advance'>Merchant Cash Advance</Link>
          </li>

          <li className='dropdown-item'>
            <Link href='/term-loan'>Term Loan</Link>
          </li>

          <li className='dropdown-item'>
            <Link href='/line-of-credit'>Line Of Credit</Link>
          </li>

          <li className='dropdown-item'>
            <Link href='/asset-based-lending'>Asset Based Lending</Link>
          </li>

          <li className='dropdown-item'>
            <Link href='/equipment-financing'>Equipment Financing</Link>
          </li>

          <li className='dropdown-item'>
            <Link href='/bad-credit-lending'>Bad Credit Lending</Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default DropdownMenu;
