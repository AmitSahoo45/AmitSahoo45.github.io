import React from 'react'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect';
import { AppWrap } from '../../wrapper'
import { images } from '../../constants'
import './Header.scss'

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const Header = () => {
    return (
        <div className="app__header app__flex">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__header-info"
            >
                <div className="app__header-badge">
                    <div className="app__header-self_intro">
                        <p className='p-text'>Namaste, I am</p>
                        <h1>Amit Kumar Sahoo</h1>
                    </div>
                    <div className="app__header-self-descrip">
                        <span className="p-text">
                            I am a
                            <h4>
                                <Typewriter
                                    options={{
                                        strings: ['Software Developer','UI/UX Designer'],
                                        autoStart: true,
                                        loop: true,
                                        delay: 100,
                                    }}
                                />
                            </h4>
                        </span>
                    </div>
                </div>
            </motion.div>

            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img"
            >
                <img src={images.profile} alt="profile_bg" className='floating_box' />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    src={images.circle}
                    alt="Circle"
                    className="overlay_circle"
                />
            </motion.div>

            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"
            >
                {[images.typescript, images.dotnet, images.java].map((circle, index) => (
                    <div className="circle-cmp app__flex" key={`circle-${index}`}>
                        <img src={circle} alt="Skills" />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default AppWrap(Header, 'home');