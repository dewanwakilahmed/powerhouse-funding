'use client';

import { FC } from 'react';

interface HowItWorksItem {
  title: string;
  description: string;
}

interface HowItWorksSectionProps {
  solutionTitle: string;
  sectionTitle: string;
  sectionContent: HowItWorksItem[];
}

const HowItWorksSection: FC<HowItWorksSectionProps> = ({
  solutionTitle,
  sectionTitle,
  sectionContent,
}) => {
  return (
    <section
      className='how-it-works-section'
      style={{
        backgroundImage: `url(/images/how-it-works-bg/${solutionTitle}-how-it-works-bg.webp)`,
        backgroundPosition: 'center',
      }}
    >
      <div className='bg-img-overlay' />

      <h2 className='how-it-works-title'>{sectionTitle}</h2>

      <div className='how-it-works-content'>
        {sectionContent.map(({ title, description }) => (
          <div className='how-it-works-card' key={title}>
            <h3 className='how-it-works-card-title'>{title}</h3>
            <p className='how-it-works-card-description'>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
