import Image from "next/image";
import Link from "next/link";
import { useRef } from 'react';
export default function Home() {
  const aboutInfo = useRef();
  return (
    <>
      <div className="hero-wrapper">
        <div className="homepage-hero">
          <Image src="/assets/homepage-hero.jpg" layout="fill" objectFit="cover"></Image>
        </div>
        <div className="greeting">
          <h1>Hi, I&apos;m Anthony Ferraro. I love building beautiful web applications</h1>
          <button className="button-primary" onClick={() => aboutInfo.current.scrollIntoView()}>About Me</button>
        </div>
      </div>
      <div className="about-me">
        <div className="profile-picture">
          <Image src="/assets/profile-picture.jpg" layout="fill" objectFit="cover"></Image>
        </div>
        <div className="about-info" ref={aboutInfo}>
          <h2>About Me</h2>
          <p className="body-1">
            I&apos;m a junior front-end developer looking for a new role in an exciting company.
            I focus on creating scalable, user-friendly web applications with modern HTML, CSS, and Javascript.
            I mostly work in React and Next.js, but I can adapt to whatever tools are needed.
            I&apos;m most happy working remotely and have experience in remote teams, but I can also work onsite.
            When I&apos;m not coding, you&apos;ll find me in a coffee shop, reading, or outdoors.
            I love being out in nature whether that&apos;s going for a walk or relaxing on the beach.
            I&apos;d love for you to check out my work.
          </p>
          <div className="resumeWrapper">
            <Link href="/portfolio">
              <button className="button-secondary">Go To Portfolio</button>
            </Link>
            <Link href="https://docs.google.com/document/d/1vUpgYV-IjkEyTthNJpJLbUy8ZR_HxaEuLUpXlCTRKBg/edit?usp=sharing">
              <button className="button-secondary">View My Resume</button>
            </Link>
          </div>
        </div>
      </div>
    </>

  )
}
