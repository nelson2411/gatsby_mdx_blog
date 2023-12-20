import React from 'react'
import SocialLinks from '../constants/socialLinks'
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-icons" />
        <p>
          &copy; {new Date().getFullYear()} <span>MDX Blog</span>
        </p>
        <span> All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer
