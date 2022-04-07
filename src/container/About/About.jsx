import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
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
                Building <span>Efficient & Qualitative </span>product means <span>Good Business</span>
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
                                className="p-text"
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
        </>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg'
)