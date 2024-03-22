"use client";

// CSS Import
import "./apply-now-page.css";

const ApplyNowPage = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.target);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzUbpcL_p0vf7TdiaGmryFp8fsRy2kKKTQJmKNPJKOwLjTGSbXdyRvNwCCZ7OGOpHli/exec",
      {
        // Replace YOUR_WEB_APP_URL with your actual URL
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      alert("Application submitted. We will get back to you soon!");
      event.target.reset(); // Optional: Reset form
    } else {
      alert("Failed to submit application. Please try again later.");
    }
  };

  return (
    <div className='apply-now-page'>
      <section
        className='apply-now-section'
        style={{
          backgroundImage: `url('/images/hero-bg/apply-now-bg.webp')`,
          backgroundPosition: "center",
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
          <form className='apply-now-form' onSubmit={handleSubmit}>
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
              <label className='input-label' htmlFor='BusinessName'>
                Business Name
              </label>
              <input
                className='input-item'
                type='text'
                id='BusinessName'
                name='BusinessName'
                placeholder='Business Name'
              />
            </div>

            <div className='input-item-container'>
              <label className='input-label' htmlFor='DesiredAmount'>
                Desired Funding Amount ($)
              </label>
              <input
                className='input-item'
                type='text'
                id='DesiredAmount'
                name='DesiredAmount'
                placeholder='Desired Amount ($)'
                required
              />
            </div>

            <div className='input-item-container'>
              <label className='input-label' htmlFor='MonthlyRevenue'>
                Average Monthly Revenue ($)
              </label>
              <input
                className='input-item'
                type='text'
                id='MonthlyRevenue'
                name='MonthlyRevenue'
                placeholder='Monthly Revenue ($)'
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

            <button type='submit' className='contact-us-form-btn btn primary'>
              Apply Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ApplyNowPage;
