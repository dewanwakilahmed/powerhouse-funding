'use client';

// CSS Import
import './apply-now-page.css';

// UI Component Import
import Button from '@/components/ui/button/Button';

const ApplyNowPage = () => {
  return (
    <div className='apply-now-page'>
      <section
        className='apply-now-section'
        style={{
          backgroundImage: `url('/images/hero-bg/apply-now-bg.webp')`,
          backgroundPosition: 'center',
        }}
      >
        <div className='bg-img-overlay' />

        <h2 className='apply-now-title'>Apply Now</h2>

        <div className='visitor-instruction-container'>
          <p className='visitor-instruction'>
            Thank you for considering Powerhouse Funding for your financial
            needs!
          </p>
        </div>

        <div className='apply-now-content'>
          <form className='apply-now-form' action=''>
            <div className='input-item-container'>
              <label className='input-label' htmlFor='name'>
                Name
              </label>
              <input
                className='input-item'
                type='text'
                id='name'
                name='name'
                placeholder='Name'
                required
              />
            </div>

            <div className='input-item-container'>
              <label className='input-label' htmlFor='businessName'>
                Business Name
              </label>
              <input
                className='input-item'
                type='text'
                id='businessName'
                name='businessName'
                placeholder='Business Name'
              />
            </div>

            <div className='input-item-container'>
              <label className='input-label' htmlFor='desiredAmount'>
                Desired Funding Amount ($)
              </label>
              <input
                className='input-item'
                type='text'
                id='desiredAmount'
                name='desiredAmount'
                placeholder='Desired Amount ($)'
                required
              />
            </div>

            <div className='input-item-container'>
              <label className='input-label' htmlFor='avgMonthlyRevenue'>
                Average Monthly Revenue ($)
              </label>
              <input
                className='input-item'
                type='text'
                id='avgMonthlyRevenue'
                name='avgMonthlyRevenue'
                placeholder='Monthly Revenue ($)'
                required
              />
            </div>

            <div className='input-item-container'>
              <label className='input-label' htmlFor='email'>
                Email
              </label>
              <input
                className='input-item'
                type='email'
                id='email'
                name='email'
                placeholder='Email'
              />
            </div>

            <div className='input-item-container'>
              <label className='input-label' htmlFor='phone'>
                Phone
              </label>
              <input
                className='input-item'
                type='tel'
                id='phone'
                name='phone'
                placeholder='Phone no'
                required
              />
            </div>

            <Button
              className='apply-now-form-btn'
              btnType='primary'
              goTo='/apply-now'
            >
              <input
                className='apply-now-form-submit'
                type='submit'
                value='Apply Now'
              />
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ApplyNowPage;
