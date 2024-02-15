'use client';

import { usePathname } from 'next/navigation';

// CSS Import
import './financial-solution-page.css';

// Content Import
import { financialSolutions } from '@/content/financialSolutions';

// Section Components Imports
import PageHeroSection from '@/components/PageHeroSection';
import WhatIsSection from '@/components/financial-solution-page-sections/WhatIsSection';
import HowItWorksSection from '@/components/financial-solution-page-sections/HowItWorksSection';
import BenefitsSection from '@/components/financial-solution-page-sections/BenefitsSection';
import UseCasesSection from '@/components/financial-solution-page-sections/UseCasesSection';
import ConsiderationsSection from '@/components/financial-solution-page-sections/ConsiderationsSections';
import CallToActionSection from '@/components/call-to-action-section/CallToActionSection';

const FinancialSolutionPage = () => {
  const pathname = usePathname();
  const financialSolutionPage = pathname.replace(/^\//, '');

  const financialSolution = financialSolutions.find(
    (solution) => solution.heroSection.title === financialSolutionPage
  );

  if (!financialSolution) return <div>Financial Solution Not Found!</div>;

  const hero = financialSolution.heroSection;
  const whatIs = financialSolution.whatIsSection;
  const howItWorks = financialSolution.howItWorksSection;
  const benefits = financialSolution.benefitsSection;
  const useCases = financialSolution.useCasesSection;
  const considerations = financialSolution.considerationsSection;

  return (
    <div className={`${hero.title}-page`}>
      <PageHeroSection
        solutionTitle={hero.title}
        headline={hero.headline}
        subheadline={hero.subheadline}
      />
      <WhatIsSection
        sectionTitle={whatIs.sectionTitle}
        sectionContent={whatIs.sectionContent}
      />
      <HowItWorksSection
        solutionTitle={hero.title}
        sectionTitle={howItWorks.sectionTitle}
        sectionContent={howItWorks.sectionContent}
      />
      <BenefitsSection
        sectionTitle={benefits.sectionTitle}
        sectionContent={benefits.sectionContent}
      />
      <UseCasesSection
        solutionTitle={hero.title}
        sectionTitle={useCases.sectionTitle}
        sectionContent={useCases.sectionContent}
      />
      <ConsiderationsSection
        sectionTitle={considerations.sectionTitle}
        sectionContent={considerations.sectionContent}
      />
      <CallToActionSection />
    </div>
  );
};

export default FinancialSolutionPage;
