"use client"

import React, {useState} from "react";

interface Message {
  title: string,
  body: string,
}

const MSG_INTRO: Message = {
  title: "Hi, I'm Isaac.",
  body: "I specialize in software engineering and web development with recent experience working in the blockchain industry.",
};

const TECHNOLOGIES = [
  { name: 'React' },
  { name: 'NextJS' },
  { name: 'NestJS' },
  { name: 'Typescript' },
  { name: 'Javascript' },
  { name: 'REST' },
  { name: 'GraphQL' },
  { name: 'SQL' },
  { name: 'Redis' },
  { name: 'Vite' },
  { name: 'Blockchain' },
  { name: 'Web 3' },
  { name: 'Material UI' },
  { name: 'Tailwind CSS' }
];

// Function to calculate font size based on index
const getTechnologiesFontSize = (index: number) => {
  if (index < 3) return 'text-lg'; // Top 3 technologies
  if (index < 7) return 'text-base';  // Next 2 technologies
  return 'text-xs'; // All remaining technologies
};

export default function Home() {
  const [message, setMessage] = useState(MSG_INTRO);

  // Define the base size for the sun or galaxy core
  const coreSizeBase = 15;

  // Calculate orbit sizes based on the core size
  const orbitSizes = [coreSizeBase + 10, coreSizeBase + 25, coreSizeBase + 40]; // Adjust as needed

  // Define pulse animation
  const pulseAnimationDuration = 10; // Duration in seconds
  const pulseAnimation = `pulse ${pulseAnimationDuration}s infinite cubic-bezier(0.4, 0, 0.6, 1)`;

  // Function to determine the correct rotation animation based on index
  const getRotationAnimation = (index: number) => {
    return index % 2 === 0 ? 'spin-cw 120s linear infinite' : 'spin-ccw 120s linear infinite';
  };

  // Function to determine the position of the planet on its orbit
  const getPlanetPosition = (orbitSize: number) => {
    // The planet will be positioned at the bottom of the orbit
    // The transform will be adjusted to compensate for the planet's size
    const planetSize = coreSizeBase / 4; // Example planet size, you can adjust as needed
    return {
      top: '50%',
      left: '50%',
      transform: `translate(-50%, calc(${orbitSize / 2}vw - ${planetSize / 2}vw))`, // Adjust the planet along the orbit
    };
  };

  return (
    <main className="flex h-screen items-center justify-center p-6 bg-black">
      <div className="w-3/5 relative flex items-center justify-center">
        {/* Orbits */}
        {orbitSizes.map((size, index) => {
          const animationDelay = `${(pulseAnimationDuration / orbitSizes.length) * index * 0.1}s`;
          const rotationAnimation = getRotationAnimation(index);
          const planetPosition = getPlanetPosition(size);

          return (
            <React.Fragment key={index}>
              <div
                className={`absolute rounded-full border`}
                style={{
                  animation: `${pulseAnimation} ${animationDelay}, ${rotationAnimation}`,
                  borderWidth: '2px',
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  borderStyle: 'dotted',
                  width: `${size}vw`,
                  height: `${size}vw`,
                }}
              ></div>
              {/* Planet */}
              <div
                className={`absolute rounded-full bg-green-600 shadow-lg`}
                style={{
                  width: `${coreSizeBase / 4}vw`, // This is the size of the planet
                  height: `${coreSizeBase / 4}vw`, // This is the size of the planet
                  ...planetPosition,
                  zIndex: 20, // Ensure the planet is above the orbit
                }}
              ></div>
            </React.Fragment>
          );
        })}

        {/* Sun or Galaxy Core */}
        <div
          className="z-10 rounded-full flex items-center justify-center"
          style={{
            // animation: `${pulseAnimation}`,
            width: `${coreSizeBase}vw`,
            height: `${coreSizeBase}vw`,
          }}
        >
          <h1 className="text-white font-thin" style={{fontSize: `${coreSizeBase / 8}vw`}}>infinia.space</h1>
        </div>
      </div>
      <div className="w-2/5 p-4">
        <h2 className="font-thin text-xl mb-2">{message.title}</h2>
        <p className="mb-2">{message.body}</p>
        <div className="tech-stack">
          {TECHNOLOGIES.map((tech, index) => {
            const fontSize = getTechnologiesFontSize(index);
            const isDifferentSize = index > 0 && fontSize !== getTechnologiesFontSize(index - 1);
            return (
              <React.Fragment key={tech.name}>
                {isDifferentSize ? <br /> : null}
                {!isDifferentSize && index !== 0 ? <span className="mx-2">·</span> : null}
                <span className={`${fontSize} inline-block mb-2`}>
                  {tech.name}
                </span>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </main>
  );
}
