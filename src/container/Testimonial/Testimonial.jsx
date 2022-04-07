import React, { useState, useEffect } from 'react'
import { AppWrap } from '../../wrapper'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import { motion } from 'framer-motion'
import { client, urlFor } from '../../client'
import './Testimonial.scss'

const Testimonial = () => {
    const [brands, setBrands] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const query = '*[_type == "testimonials"]';
        const skillsQuery = '*[_type == "brands"]';

        client.fetch(query)
            .then((data) => {
                setTestimonials(data);
            })

        client.fetch(skillsQuery)
            .then((data) => {
                setBrands(data);
            })
    }, []);

    const Index = testimonials[currentIndex];

    const handleOnClick = (currentIndex) => {
        setCurrentIndex(currentIndex);
    }

    return (
        <>
            {
                testimonials.length &&
                (<>
                    <div className="app__testimonial-item app__flex">
                        <img src={urlFor(Index.imgurl)} alt="Testimonial" />
                        <div className="app__testimonial-content">
                            <p className="p-text">
                                {Index.feedback}
                            </p>
                            <div>
                                <h4 className="bold-text">
                                    {Index.name}
                                </h4>
                                <h5 className="bold-text">
                                    {Index.company}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="app__testimonial-btns app__flex">
                        <div className="app__flex" onClick={() => handleOnClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                            <HiChevronLeft />
                        </div>

                        <div className="app__flex" onClick={() => handleOnClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                            <HiChevronRight />
                        </div>
                    </div>
                </>
                )}

            <div className="app__testimonial-brands app__flex">
                {brands.map((brand) => (
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        key={brand._id}
                    >
                        <img src={urlFor(brand.imgUrl)} alt={brand.name} />
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default AppWrap(Testimonial, 'testimonial')