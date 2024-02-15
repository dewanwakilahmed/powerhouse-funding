'use client';

import { FC } from 'react';

// Icon Imports
import { FaCheckCircle, FaBalanceScale, FaHandshake } from 'react-icons/fa';

// UI Component Import
import Button from '@/components/ui/button/Button';

const benefits = [
  {
    title: 'Fast Approval Process',
    description:
      'Experience quick and efficient approval timelines for your funding needs.',
    icon: <FaCheckCircle className='benefit-card-icon' />,
  },
  {
    title: 'Flexible and Competitive Rates',
    description:
      "Enjoy financing options with rates that adapt to your business's unique requirements.",
    icon: <FaBalanceScale className='benefit-card-icon' />,
  },
  {
    title: 'Personalized Solutions',
    description:
      'Tailored financial solutions designed to meet the specific needs of your business.',
    icon: <FaHandshake className='benefit-card-icon' />,
  },
];

const WhyChooseUsSection: FC = () => {
  return (
    <section
      className='why-choose-us-section'
      style={{
        backgroundImage: `url('/images/why-choose-us-bg/why-choose-us-bg.webp')`,
        backgroundPosition: 'center',
      }}
    >
      <div className='bg-img-overlay' />

      <h2 className='why-choose-us-title'>Why Choose Us</h2>

      <div className='why-choose-us-content'>
        {benefits.map((benefit, index) => (
          <div key={index} className='benefit-card'>
            {benefit.icon}

            <h3 className='benefit-card-title'>{benefit.title}</h3>

            <p className='benefit-card-description'>{benefit.description}</p>
          </div>
        ))}
      </div>

      <Button
        className='why-choose-us-cta relative mt-5'
        btnType='primary'
        goTo='/apply-now'
      >
        Apply Now
      </Button>
    </section>
  );
};

export default WhyChooseUsSection;
