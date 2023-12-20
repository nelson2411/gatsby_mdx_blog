import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = showPerson => {
  return (
    <header className="hero">
      {showPerson && (
        <StaticImage
          src="../assets/person.png"
          alt="main image"
          className="hero-person"
          placeholder="blurred"
        />
      )}
    </header>
  )
}

export default Hero
