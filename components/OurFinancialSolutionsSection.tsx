'use client';

import { FC } from 'react';
import Link from 'next/link';

// Icon Imports
import {
  FaMoneyBillWave,
  FaHandHoldingUsd,
  FaCreditCard,
  FaCoins,
  FaTools,
  FaSadCry,
} from 'react-icons/fa';

const financialSolutions = [
  {
    title: 'Merchant Cash Advance',
    description:
      'Unlock immediate capital based on your credit card sales, with flexible repayment.',
    link: '/merchant-cash-advance',
    icon: <FaMoneyBillWave className='financial-solution-icon' />,
  },
  {
    title: 'Term Loan',
    description:
      'Secure a lump sum for your business with fixed repayments over a specified term.',
    link: '/term-loan',
    icon: <FaHandHoldingUsd className='financial-solution-icon' />,
  },
  {
    title: 'Line of Credit',
    description:
      'Flexible financing with access to funds up to a predetermined credit limit.',
    link: '/line-of-credit',
    icon: <FaCreditCard className='financial-solution-icon' />,
  },
  {
    title: 'Asset Based Lending',
    description:
      'Leverage your business assets to secure a flexible and tailored financing solution.',
    link: '/asset-based-lending',
    icon: <FaCoins className='financial-solution-icon' />,
  },
  {
    title: 'Equipment Financing',
    description:
      'Acquire the equipment your business needs with financing options customized for you.',
    link: '/equipment-financing',
    icon: <FaTools className='financial-solution-icon' />,
  },
  {
    title: 'Bad Credit Lending',
    description:
      'Overcome credit challenges and access the funding your business requires to thrive.',
    link: '/bad-credit-lending',
    icon: <FaSadCry className='financial-solution-icon' />,
  },
];

const OurFinancialSolutionsSection: FC = () => {
  return (
    <section className='our-financial-solutions-section'>
      <h2 className='our-financial-solutions-title'>Our Financial Solutions</h2>

      <div className='our-financial-solutions-content'>
        {financialSolutions.map((solution, index) => (
          <div key={index} className='financial-solution-card'>
            {solution.icon}

            <h3 className='financial-solution-title'>{solution.title}</h3>

            <p className='financial-solution-description'>
              {solution.description}
            </p>

            <Link
              className='financial-solution-learn-more-link'
              href={solution.link}
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurFinancialSolutionsSection;
