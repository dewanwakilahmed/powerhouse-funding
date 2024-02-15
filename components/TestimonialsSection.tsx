'use client';

import { FC } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Emma Johnson',
    image: '/images/testimonials/emma-johnson.webp',
    position: 'Founder, XYZ Enterprises',
    feedback:
      'Powerhouse Funding exceeded our expectations. Their personalized approach and quick approval process helped us secure the funding we needed to grow our business.',
  },
  {
    name: 'David Smith',
    image: '/images/testimonials/david-smith.webp',
    position: 'Owner, ABC Solutions',
    feedback:
      'I highly recommend Powerhouse Funding for their professionalism and efficiency. They provided us with flexible financing options tailored to our business needs, allowing us to achieve our goals.',
  },
  {
    name: 'Sophia Brown',
    image: '/images/testimonials/sophia-brown.webp',
    position: 'CEO, Brown & Co.',
    feedback:
      'Working with Powerhouse Funding was a fantastic experience. Their team guided us through every step of the process, and their commitment to our success was evident from the start.',
  },
];

const TestimonialsSection: FC = () => {
  return (
    <section
      className='testimonials-section'
      style={{
        backgroundImage: `url('/images/testimonials/testimonials-bg.webp')`,
        backgroundPosition: 'center',
      }}
    >
      <div className='bg-img-overlay' />

      <h2 className='testimonials-title'>Testimonials</h2>

      <div className='testimonials-content'>
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className='testimonial-card'>
            <Image
              className='testimonial-person-img'
              src={testimonial.image}
              alt={testimonial.name}
              width={300}
              height={300}
            />

            <h3 className='testimonial-person-name'>{testimonial.name}</h3>

            <h4 className='testimonial-person-info'>{testimonial.position}</h4>

            <p className='testimonial-person-feedback'>
              {testimonial.feedback}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
