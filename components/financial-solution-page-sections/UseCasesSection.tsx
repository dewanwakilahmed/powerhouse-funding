'use client';

import { FC } from 'react';

interface UseCase {
  title: string;
  description: string;
}

interface UseCasesSectionProps {
  solutionTitle: string;
  sectionTitle: string;
  sectionContent: UseCase[];
}

const UseCasesSection: FC<UseCasesSectionProps> = ({
  solutionTitle,
  sectionTitle,
  sectionContent,
}) => {
  return (
    <section
      className='use-cases-section'
      style={{
        backgroundImage: `url(/images/use-cases-bg/${solutionTitle}-use-cases-bg.webp)`,
        backgroundPosition: 'center',
      }}
    >
      <div className='bg-img-overlay' />

      <h2 className='use-cases-title'>{sectionTitle}</h2>

      <div className='use-cases-content'>
        {sectionContent.map(({ title, description }) => (
          <div className='use-case-card' key={title}>
            <h3 className='use-case-card-title'>{title}</h3>
            <p className='use-case-card-description'>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCasesSection;
