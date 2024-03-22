"use client";

// CSS Import
import "./contact-us-page.css";

const ContactUsPage = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.target);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbw-vLAI7tjODT12LO0cfMtFfd3zkXADUSqHuqexowA5nd7K0qXUeBJEky5_SxgcJktL9Q/exec",
      {
        // Replace YOUR_WEB_APP_URL with your actual URL
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      alert("Thank you for your message. We will get back to you soon!");
      event.target.reset(); // Optional: Reset form
    } else {
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className='contact-us-page'>
      <section
        className='contact-us-section'
        style={{
          backgroundImage: `url('/images/hero-bg/contact-us-bg.webp')`,
          backgroundPosition: "center",
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
          <form className='contact-us-form' onSubmit={handleSubmit}>
            <div className='input-item-container'>
              <label className='input-label' htmlFor='Name'>
                Name
              </label>
              <input
                className='input-item'
                type='text'
                id='Name'
                name='Name'
                placeholder='Name'
                required
              />
            </div>

            <div className='input-item-container'>
              <label className='input-label' htmlFor='Email'>
                Email
              </label>
              <input
                className='input-item'
                type='email'
                id='Email'
                name='Email'
                placeholder='Email'
              />
            </div>

            <div className='input-item-container'>
              <label className='input-label' htmlFor='PhoneNo'>
                Phone
              </label>
              <input
                className='input-item'
                type='tel'
                id='PhoneNo'
                name='PhoneNo'
                placeholder='Phone no'
                required
              />
            </div>

            <div className='input-item-container'>
              <label className='input-label' htmlFor='Message'>
                Message
              </label>
              <textarea
                className='input-item'
                id='Message'
                name='Message'
                placeholder='Message'
              ></textarea>
            </div>

            <button type='submit' className='contact-us-form-btn btn primary'>
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
