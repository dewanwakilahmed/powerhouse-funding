'use client';

// CSS Import
import './contact-us-page.css';

// UI Component Import
import Button from '@/components/ui/button/Button';

const ContactUsPage = () => {
  return (
    <div className='contact-us-page'>
      <section
        className='contact-us-section'
        style={{
          backgroundImage: `url('/images/hero-bg/contact-us-bg.webp')`,
          backgroundPosition: 'center',
        }}
      >
        <div className='bg-img-overlay' />

        <h2 className='contact-us-title'>Contact Us</h2>

        <div className='visitor-instruction-container'>
          <p className='visitor-instruction'>
            Thank you for your interest in Powerhouse Funding!
          </p>
        </div>

        <div className='contact-us-content'>
          <form className='contact-us-form' action=''>
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

            <div className='input-item-container'>
              <label className='input-label' htmlFor='message'>
                Message
              </label>
              <textarea
                className='input-item'
                id='message'
                name='message'
                placeholder='Message'
              ></textarea>
            </div>

            <Button
              className='contact-us-form-btn'
              btnType='primary'
              goTo='/contact-us'
            >
              <input
                className='contact-us-form-submit'
                type='submit'
                value='Send Message'
              />
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
