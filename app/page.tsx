'use client';

// CSS Import
import './home-page.css';

// Section Imports
import PageHeroSection from '@/components/PageHeroSection';
import OurFinancialSolutionsSection from '@/components/OurFinancialSolutionsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import AboutUsSection from '@/components/AboutUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/call-to-action-section/CallToActionSection';

const HomePage = () => {
  return (
    <div className='home-page'>
      <PageHeroSection
        solutionTitle='home'
        headline='Funding Your Way: Tailored Solutions for Every Business Dream'
        subheadline='Unlock your ambition. Scale your dreams. Partner with Powerhouse
        Funding!'
      />
      <OurFinancialSolutionsSection />
      <WhyChooseUsSection />
      <AboutUsSection />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  );
};

export default HomePage;
