'use client';

import { FC } from 'react';

interface Benefit {
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  sectionTitle: string;
  sectionContent: Benefit[];
}

const BenefitsSection: FC<BenefitsSectionProps> = ({
  sectionTitle,
  sectionContent,
}) => {
  return (
    <section className='benefits-section'>
      <h2 className='benefits-title'>{sectionTitle}</h2>

      <div className='benefits-content'>
        {sectionContent.map(({ title, description }) => (
          <div className='benefit-card' key={title}>
            <h3 className='benefit-card-title'>{title}</h3>
            <p className='benefit-card-description'>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
