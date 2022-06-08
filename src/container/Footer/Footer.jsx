import React, { useState } from 'react'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { motion } from 'framer-motion'
import { client, urlFor } from '../../client'
import { Loader } from '../../components'
import { BsTwitter, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import './Footer.scss'


const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isFormSubmitted, setisFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setisFormSubmitted(true);
      })
  }

  return (
    <>
      <h2 className="head-text">
        Wanna Talk with me
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="Email" />
          <a href="mailto:miamitsahoo@email.com" className='p-text-black'>
            Email Me
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="Email" />
          <a href="tel: +91 9000213148" className='p-text-black'>
            Call Me
          </a>
        </div>
      </div>

      <div
        className='app__footer-social-media-icons app__flex'
        style={{ flexDirection: 'column' }}
      >
        <h4 className="bold-text">
          My Social Media Handles
        </h4>
        <ul className='app__flex'>
          <li><a href="https://mobile.twitter.com/DepressedCoder" target="_blank" rel="noopener">
            <BsTwitter className='app__primarybg' />
          </a></li>
          <li><a href="https://github.com/AmitSahoo45/" target="_blank" rel="noopener">
            <BsGithub className='app__primarybg' />
          </a></li>
          <li><a href="https://www.instagram.com/amit_aksabar_sahoo/" target="_blank" rel="noopener">
            <BsInstagram className='app__primarybg' />
          </a></li>
          <li><a href="https://www.linkedin.com/in/amit-kumar-sahoo-web/" target="_blank" rel="noopener">
            <BsLinkedin className='app__primarybg' />
          </a></li>
        </ul>
      </div>

      {!isFormSubmitted ?
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input type="text" className='p-text' placeholder="Enter your name" name="name" value={name} onChange={handleChangeInput} required />
          </div>

          <div className="app__flex">
            <input type="email" className='p-text' placeholder="Enter your email" name="email" value={email} onChange={handleChangeInput} required />
          </div>

          <div>
            <textarea
              className="p-text-black"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              required
            />
          </div>

          <div className="app__footer-btn" onClick={handleSubmit}>
            {!loading ? 'Send Message' : <Loader />}
          </div>
        </div>
        :
        (
          <div>
            <h3 className="head-text">
              Thank you very much. I will contact you very soon
            </h3>
          </div>
        )
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)