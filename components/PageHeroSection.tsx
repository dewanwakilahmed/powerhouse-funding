'use client';

import { FC } from 'react';

// UI Component Imports
import Button from '@/components/ui/button/Button';

interface PageHeroSectionProps {
  solutionTitle: string;
  headline: string;
  subheadline: string;
}

const PageHeroSection: FC<PageHeroSectionProps> = ({
  solutionTitle,
  headline,
  subheadline,
}) => {
  return (
    <section
      className={`${solutionTitle}-hero-section`}
      style={{
        backgroundImage: `url('/images/hero-bg/${solutionTitle}-hero-bg.webp')`,
        backgroundPosition: 'center',
      }}
    >
      <div className='bg-img-overlay' />

      <div className={`${solutionTitle}-hero-content`}>
        <h1 className={`${solutionTitle}-hero-headline`}>{headline}</h1>

        <p className={`${solutionTitle}-hero-subheadline`}>{subheadline}</p>

        <Button
          className={`${solutionTitle}-hero-cta`}
          btnType='primary'
          goTo='/apply-now'
        >
          Apply Now
        </Button>
      </div>
    </section>
  );
};

export default PageHeroSection;
