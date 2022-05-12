import React from 'react'
import Image from 'next/image'

const whereInTheWorld = () => {
  const tags = ["React", "React - Hooks", "REST APIs", "CI/CD", "Git", "Fully Responsive", "SCSS"];
  const images = ["/assets/world-preview2.jpg", "/assets/world-preview1.jpg"]
  return (
    <>
      <div className="hero-wrapper">
        <Image src="/assets/world-hero.jpg" layout="fill" objectFit="cover"></Image>
      </div>
      <h2>Where in the World?</h2>
      <div className="details-1">
        <div>
          <ul className="tags">
            {tags.map((tool, index) => <li className="tool-tag" key={index}>{tool}</li>)}
          </ul>
          <a href="https://fm-country-explorer.netlify.app/" target="_blank" rel="noreferrer">
            <button className="button-secondary">View Website</button>
          </a>
        </div>
        <div>
          <p className="body-1">
            This frontend web application is powered by the REST countries API. The site displays useful information about every country in the world in a clean UI. I implemented search filters and a light/dark theme switcher.
          </p>
        </div>
      </div>
      <div className="project-background">
        <h3>Project Background</h3>
        <p>
          <em>Where in the World?</em> is a single-page web appilication built with React and SCSS, intended to be used as a geography learning tool. It is fully responsive, and powered by the REST Countries API.
        </p>
      </div>
      <div className="previews">
        <h3>Static Previews</h3>
        {images.map((image, index) =>
          <div key={index} className="preview-wrapper">
            <Image alt={image} src={image} layout="fill" objectFit="cover"></Image>
          </div>
        )}
      </div>
    </>
  )
}

export default whereInTheWorld