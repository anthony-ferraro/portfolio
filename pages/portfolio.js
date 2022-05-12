import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
const portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="project-container">
        <div className="project-image">
          <Image src="/assets/dash-thumbnail.jpg" layout="fill" objectFit="contain"></Image>
        </div>
        <div className="project-info">
          <h2>Dash Entertainment</h2>
          <p className="body-1">
            I built a full stack entertainment web app with Next.js and Firebase, complete with user authentication to save bookmarks. I&apos;m fetching movie and TV show information from the TMDB API, and storing user data in Firestore.
            &nbsp;<a className="link" href="https://dash-entertainment.vercel.app" target="_blank" rel="noreferrer">
              View Website
            </a>
          </p>
          <div className="buttons">
            <Link href="/projects/dash-entertainment" passHref={true}>
              <a>
                <button className="button-secondary">Learn More</button>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="project-container">
        <div className="project-image">
          <Image src="/assets/world-thumbnail.jpg" layout="fill" objectFit="contain"></Image>
        </div>
        <div className="project-info">
          <h2>Where in the World?</h2>
          <p className="body-1">
            This frontend web application is powered by the REST countries API. The site displays useful information about every country in the world in a clean UI. I implemented search filters and a light/dark theme switcher.
            &nbsp;<a className="link" href="https://fm-country-explorer.netlify.app/" target="_blank" rel="noreferrer">
              View Website
            </a>
          </p>
          <div className="buttons">
            <Link href="/projects/where-in-the-world" passHref={true}>
              <a>
                <button className="button-secondary">Learn More</button>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="project-container">
        <div className="project-image">
          <Image src="/assets/tictactoe-thumbnail.jpg" layout="fill" objectFit="contain"></Image>
        </div>
        <div className="project-info">
          <h2>Tic-Tac-Toe</h2>
          <p className="body-1">
            I created a Tic-Tac-Toe game in React that has multiplayer and singleplayer (vs CPU) play modes. I used Context to manage state. The computer move AI seamlessly reacts to human player moves.
            &nbsp;<a className="link" href="https://fm-tic-tac-toe.netlify.app/" target="_blank" rel="noreferrer">
              View Website
            </a>
          </p>
          <div className="buttons">
            <Link href="/projects/tic-tac-toe" passHref={true}>
              <a>
                <button className="button-secondary">Learn More</button>
              </a>
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default portfolio