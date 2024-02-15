'use client';

import { FC } from 'react';

// CSS Import
import './call-to-action-section.css';

// UI Component Import
import Button from '@/components/ui/button/Button';

const ctaItems = [
  {
    title: 'Eager to Kickstart Your Business?',
    description:
      'Submit your application today and receive approval within a day. We provide a range of funding options tailored to your business requirements.',
    link: '/apply-now',
    btnText: 'Apply Now',
    btnType: 'primary',
  },
  {
    title: 'Need More Information Before Deciding?',
    description:
      'Unsure about the right funding option for your business? Our dedicated team is on standby to assist you in identifying the most suitable solution.',
    link: '/contact-us',
    btnText: 'Contact Us',
    btnType: 'secondary',
  },
];

const CallToActionSection: FC = () => {
  return (
    <section className='call-to-action-section'>
      <h2 className='call-to-action-title'>Get Started Today</h2>

      <div className='call-to-action-content'>
        {ctaItems.map((item, index) => (
          <div className='call-to-action-card' key={index}>
            <h3 className='call-to-action-card-title'>{item.title}</h3>

            <p className='call-to-action-card-description'>
              {item.description}
            </p>

            <Button
              className='call-to-action-card-btn'
              btnType={
                item.btnType === 'primary' || item.btnType === 'secondary'
                  ? item.btnType
                  : 'primary'
              }
              goTo={item.link}
            >
              {item.btnText}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CallToActionSection;
