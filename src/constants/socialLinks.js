import React from 'react'
import {
  FaFacebookSquare,
  FaDribbbleSquare,
  FaTwitterSquare,
  FaLinkedin,
} from 'react-icons/fa'
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://twitter.com">
          <FaFacebookSquare className="social-icon facebook-icon"></FaFacebookSquare>
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <FaLinkedin className="social-icon dribble-icon"></FaLinkedin>
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <FaTwitterSquare className="social-icon twitter-icon"></FaTwitterSquare>
        </a>
      </li>
    </ul>
  )
}
export default SocialLinks
