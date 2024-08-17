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
            I&apos;m a Full Stack Software Engineer II at Vazkor with 5 years of experience in software development.
            I specialize in creating scalable, user-friendly web applications using .NET/C#, React, and TypeScript.
            My expertise extends to Azure, microservices, and payment solutions, with a strong background in fintech and cloud computing.
            I have extensive experience working in agile environments and am passionate about delivering high-quality software solutions.
            Previously, I worked as a Software Development Engineer I at DEKA, where I honed my skills in innovative product development.
            When I&apos;m not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or enjoying the great outdoors.
            I&apos;m always excited to take on new challenges and collaborate on interesting projects.
          </p>
          <div className="resumeWrapper">
            <Link href="/portfolio">
              <button className="button-secondary">Go To Portfolio</button>
            </Link>
            <Link href="/assets/Anthony_ferraro_resume_sharable.pdf">
              <button className="button-secondary">View My Resume</button>
            </Link>
          </div>
        </div>
      </div>
    </>

  )
}
