import React from 'react'
import Image from 'next/image'

const dashEntertainment = () => {
  const tags = ["React", "React - Hooks", "Next.js", "Firebase", "REST APIs", "OAuth", "CI/CD", "Git", "Fully Responsive", "SCSS"];
  const images = ["/assets/dash-preview1.jpg", "/assets/dash-preview4.jpg", "/assets/dash-preview2.jpg", "/assets/dash-preview3.jpg",]
  return (
    <>
      <div className="hero-wrapper">
        <Image src="/assets/dash-hero.jpg" layout="fill" objectFit="cover"></Image>
      </div>
      <h2>Dash Entertainment</h2>
      <div className="details-1">
        <div>
          <ul className="tags">
            {tags.map((tool, index) => <li className="tool-tag" key={index}>{tool}</li>)}
          </ul>
          <a href="https://dash-entertainment.vercel.app" target="_blank" rel="noreferrer">
            <button className="button-secondary">View Website</button>
          </a>
        </div>
        <div>
          <p className="body-1">
            I built a full stack entertainment web app with Next.js and Firebase, complete with user authentication to save bookmarks. I&apos;m fetching movie and TV show information from the TMDB API, and storing user data in Firestore.
          </p>
        </div>
      </div>
      <div className="project-background">
        <h3>Project Background</h3>
        <p>
          Dash Entertainment is the best website to find information on the latest Movies, TV Series, and rising Stars. Users can see what&apos;s trending, watch trailers, and even see which content providers have the Movie or TV Show they want to watch.
        </p>
        <p>
          This project was inspired by the entertainment web app Frontendmentor challenge. I built the app using fake data as a placeholder, before refactoring the code to access 2 different REST APIs and display real-world information. Finally, I added bookmarks and user authentication with Google, Twitter, and Email/Password sign in.
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

export default dashEntertainment