import React from 'react'
import { BsTwitter, BsGithub, BsInstagram } from 'react-icons/bs'

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href="https://mobile.twitter.com/DepressedCoder" target="_blank" rel="noopener">
                    <BsTwitter />
                </a>
            </div>
            <div>
                <a href="https://github.com/AmitSahoo45/" target="_blank" rel="noopener">
                    <BsGithub />
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/amit_aksabar_sahoo/" target="_blank" rel="noopener">
                    <BsInstagram />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia