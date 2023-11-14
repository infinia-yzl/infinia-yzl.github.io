'use client';

import React, { useState } from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { HiOutlineExternalLink } from 'react-icons/hi';

interface Message {
  title: string,
  body: string,
  highlight: {
    title: string,
    url: string,
  }
}

const MSG_INTRO: Message = {
  title: "Hi, I'm Isaac.",
  body: 'I specialize in software engineering and web development with recent working experience in the blockchain industry.',
  highlight: {
    title: 'Levain',
    url: 'https://developer.levain.tech/',
  },
};

const TECHNOLOGIES = [
  { name: 'React' },
  { name: 'NextJS' },
  { name: 'NestJS' },
  { name: 'Typescript' },
  { name: 'Javascript' },
  { name: 'REST' },
  { name: 'GraphQL' },
  { name: 'Jest' },
  { name: 'Mocha' },
  { name: 'Cypress' },
  { name: 'Playwright' },
  { name: 'SQL' },
  { name: 'TypeORM' },
  { name: 'Sequelize' },
  { name: 'KnexJS' },
  { name: 'Redis' },
  { name: 'NodeJS' },
  { name: 'BunJS' },
  { name: 'Vite' },
  { name: 'Material UI' },
  { name: 'Tailwind CSS' },
  { name: 'Blockchain' },
  { name: 'Web 3' },
  { name: 'UTXO' },
  { name: 'EVM' },
  { name: 'SVM' },
  { name: 'TVM' },
  { name: 'Unreal Engine' },
];

// Function to calculate font size based on index
const getTechnologiesFontSize = (index: number) => {
  if (index < 3) return 'text-lg'; // Top 3 technologies
  if (index < 7) return 'text-base';
  return 'text-xs'; // All remaining technologies
};

// interface Experience {
//   title: string,
//   company: string,
//   description: string,
//   link?: string,
// }
//
// const EXPERIENCES: Experience[] = [
//   {
//     title: 'Lead Software Engineer',
//     company: 'Levain, Cake Group',
//     description: 'Lorem ipsum dolor sit amet..',
//     link: 'https://developer.levain.tech',
//   },
//   {
//     title: 'Software Engineer',
//     company: 'Bake, Cake Group',
//     description: 'Lorem ipsum dolor sit amet..',
//     link: 'https://bake.io',
//   },
//   {
//     title: 'Software Engineer',
//     company: 'Zynesis Pte Ltd',
//     description: 'Lorem ipsum dolor sit amet..',
//     link: 'https://zynesis.com/',
//   }
// ];

export default function Home() {
  const [message] = useState(MSG_INTRO);

  // Define the base size for the sun or galaxy core
  const coreSizeBase = 15;

  // Calculate orbit sizes based on the core size
  const orbitSizes = [coreSizeBase + 10, coreSizeBase + 25, coreSizeBase + 40];

  // Define pulse animation
  const pulseAnimationDuration = 10; // Duration in seconds
  const pulseAnimation = `pulse ${pulseAnimationDuration}s infinite cubic-bezier(0.4, 0, 0.6, 1)`;

  // Function to determine the correct rotation animation based on index
  const getRotationAnimation = (index: number) => (index % 2 === 0 ? 'spin-cw 120s linear infinite' : 'spin-ccw 120s linear infinite');

  return (
    <main>
      <section className="h-screen flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 relative flex items-center justify-center">
          {/* Orbits */}
          {orbitSizes.map((size, index) => {
            const animationDelay = `${(pulseAnimationDuration / orbitSizes.length) * index * 0.1}s`;
            const rotationAnimation = getRotationAnimation(index);
            return (
              // eslint-disable-next-line react/no-array-index-key
              <React.Fragment key={index}>
                <div
                  /* eslint-disable-next-line react/no-array-index-key */
                  key={index}
                  className="orbit absolute rounded-full border"
                  style={{
                    animation: `${pulseAnimation} ${animationDelay}, ${rotationAnimation}`,
                    width: `${size}vw`, // Adjust max value as needed
                    height: `${size}vw`, // Adjust max value as needed
                    maxWidth: `${(index + 1) * 13.5}vw`,
                    maxHeight: `${(index + 1) * 13.5}vw`,
                  }}
                />
              </React.Fragment>
            );
          })}
          {/* Sun or Galaxy Core */}
          <div
            className="z-10 rounded-full flex items-center justify-center"
            style={{
              width: `${coreSizeBase}vw`,
              height: `${coreSizeBase}vw`,
            }}
          >
            <h1 className="text-white font-thin" style={{ fontSize: `${coreSizeBase / 12}vw` }}>
              infinia.space
            </h1>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 mt-24 md:mt-0">
          <h2 className="text-xl mb-2">{message.title}</h2>
          <p className="mb-2">{message.body}</p>
          <div className="font-thin border-l-2 border-gray-700 pl-2 mb-2 max-w-screen-md">
            {TECHNOLOGIES.map((tech, index) => {
              const fontSize = getTechnologiesFontSize(index);
              const isDifferentSize = index > 0 && fontSize !== getTechnologiesFontSize(index - 1);
              return (
                <React.Fragment key={tech.name}>
                  {isDifferentSize ? <br /> : null}
                  {!isDifferentSize && index !== 0 ? <span className="mx-2">·</span> : null}
                  <span className={`${fontSize} inline-block mb-2 text-gray-200`}>
                    {tech.name}
                  </span>
                </React.Fragment>
              );
            })}
          </div>
          <p className="mt-2 mb-2">
            Most notable, recent work:
            <button
              type="button"
              className="inline-flex items-center rounded-full border-2 border-white bg-black ml-2 py-2 px-4 hover:bg-white hover:text-black transition duration-400 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-white focus:ring-opacity-50"
            >
              <a
                href={message.highlight.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <span>{message.highlight.title}</span>
                <HiOutlineExternalLink className="ml-2" />
              </a>
            </button>
          </p>

          {/* CTA */}
          <div className="flex space-x-4">
            <button type="button" aria-label="github">
              <a href="https://github.com/infinia-yzl" target="_blank" rel="noreferrer" aria-label="github">
                <SiGithub className="text-4xl" />
              </a>
            </button>
            <button type="button" aria-label="linkedin">
              <a href="https://www.linkedin.com/in/infinia/" target="_blank" rel="noreferrer" aria-label="linkedin">
                <SiLinkedin className="text-4xl" />
              </a>
            </button>
            <button type="button" aria-label="email">
              <a href="mailto:explore@infinia.space" aria-label="email">
                <MdEmail className="text-4xl" />
              </a>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
