import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import { images } from '../../constants'
import './About.scss'

const About = () => {

    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]'

        client.fetch(query)
            .then((data) => {
                setAbouts(data)
            })
    }, []);

    return (
        <>
            <h2 className="head-text header-text">
                Building <span>Efficient & Qualitative </span>products means <span>Good Business</span>
            </h2>

            <motion.div
                className='app__profiles'
            >
                {
                    abouts.map((about, index) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                            className='app__profile-item'
                            key={about.title + index}
                        >
                            <img src={urlFor(about.imgUrl)} alt={about.title} />
                            <h2
                                className="bold-text"
                                style={{
                                    marginTop: 20
                                }}
                            >
                                {about.title}
                            </h2>

                            <p
                                className="p-text-black"
                                style={{
                                    marginTop: 10
                                }}
                            >
                                {about.description}
                            </p>
                        </motion.div>
                    ))
                }
            </motion.div>

            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, type: 'tween', stiffness: 50 }}
                className="app__profiles-postman-wrap"
            >
                <a href="https://api.badgr.io/public/assertions/euaP5P3-Q0qT6s50trr2UA?identity__email=miamitsahoo%40gmail.com" target="_blank" rel="noopener noreferrer">
                    <div>
                        <img src={images.postmanstudentexpert} alt="" />
                    </div>
                    <h4>
                        Postman Student Expert
                    </h4>
                </a>
            </motion.div>

            {/* <button
                className='app__profiles-btn-download-resume'
            >
                <a
                    href={Resume}
                    download='AmitKumarSahooResume.pdf'
                    target="_blank"
                    rel="noreferrer"
                >
                    Download Resume
                </a>
            </button> */}
        </>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg'
)

