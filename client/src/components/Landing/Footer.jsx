import React from "react";

import MessageLogo from "../../assets/svgs/hero-message.svg";

const Footer = () => {
  return (
    <footer className='home-footer'>
      <h1 className='heading heading--primary center-content'>
        <span className='highlight'>Contact Us</span>
      </h1>
      <div className='home-footer__main'>
        <div className='home-footer__logo'>
          <img src={MessageLogo} alt='message' />
        </div>
        <div className='home-footer--center'>
          <form action='' className='form home-footer__form'>
            {/* <h2 className="heading heading--primary heading--primary--white">
                Get in touch
            </h2> */}
            <div className='form__group form__group--first'>
              <input
                type='text'
                className='form__input'
                placeholder='Full name'
                id='name'
                required
              />
              <label htmlFor='name' className='form__label'>
                Full Name
              </label>
            </div>

            <div className='form__group'>
              <input
                type='email'
                className='form__input'
                placeholder='Email address'
                id='email'
                required
              />
              <label htmlFor='email' className='form__label'>
                Email address
              </label>
            </div>
            <div className='form__group'>
              <textarea
                className='form__input'
                name='contact-message'
                cols='30'
                rows='2'
                placeholder='Enter your Query'
              ></textarea>
              <label htmlFor='contact-message' className='form__label'>
                Your Query
              </label>
            </div>
            <button className='button button--primary'>Send Message</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
