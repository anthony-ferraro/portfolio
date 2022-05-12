import React from 'react'
import Image from 'next/image'

const ticTacToe = () => {
  const tags = ["React", "React - Context", "React - Hooks", "Git", "Fully Responsive"];
  const images = ["/assets/tictactoe-preview1.jpg", "/assets/tictactoe-preview2.jpg"]
  return (
    <>
      <div className="hero-wrapper">
        <Image src="/assets/tictactoe-hero.jpg" layout="fill" objectFit="cover"></Image>
      </div>
      <h2>Tic-Tac-Toe Game</h2>
      <div className="details-1">
        <div>
          <ul className="tags">
            {tags.map((tool, index) => <li className="tool-tag" key={index}>{tool}</li>)}
          </ul>
          <a href="https://fm-tic-tac-toe.netlify.app/" target="_blank" rel="noreferrer">
            <button className="button-secondary">View Website</button>
          </a>
        </div>
        <div>
          <p className="body-1">
            I created a Tic-Tac-Toe game in React that has multiplayer and singleplayer (vs CPU) play modes. I used Context to manage state. The computer move AI seamlessly reacts to human player moves.
          </p>
        </div>
      </div>
      <div className="project-background">
        <h3>Project Background</h3>
        <p>
          This single-page web appilication is a solution to the Frontendmentor tic-tac-toe challenge.
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

export default ticTacToe