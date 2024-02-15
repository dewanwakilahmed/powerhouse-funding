'use client';

import { FC } from 'react';

interface Consideration {
  title: string;
  description: string;
}

interface ConsiderationsSectionProps {
  sectionTitle: string;
  sectionContent: Consideration[];
}

const ConsiderationsSection: FC<ConsiderationsSectionProps> = ({
  sectionTitle,
  sectionContent,
}) => {
  return (
    <section className='considerations-section'>
      <h2 className='considerations-title'>{sectionTitle}</h2>

      <div className='considerations-content'>
        {sectionContent.map(({ title, description }) => (
          <div className='consideration-card' key={title}>
            <h3 className='consideration-card-title'>{title}</h3>
            <p className='consideration-card-description'>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConsiderationsSection;
