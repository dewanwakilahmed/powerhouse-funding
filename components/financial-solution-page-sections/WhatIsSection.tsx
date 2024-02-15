'use client';

import { FC } from 'react';

interface WhatIsSectionProps {
  sectionTitle: string;
  sectionContent: string;
}

const WhatIsSection: FC<WhatIsSectionProps> = ({
  sectionTitle,
  sectionContent,
}) => {
  return (
    <section className='what-is-section'>
      <h2 className='what-is-title'>{sectionTitle}</h2>

      <div className='what-is-content'>
        <div className='what-is-card'>
          <div className='what-is-card-description'> {sectionContent}</div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
