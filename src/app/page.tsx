"use client"

import React, {useState} from "react";

interface Message {
  title: string,
  body: string,
}

const MSG_INTRO: Message = {
  title: "Hi, I'm Isaac.",
  body: "I specialize in software engineering and web development with recent working experience in the blockchain industry.",
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

  const innerHaloSize = orbitSizes[0]; // Use the first orbit size for the inner halo

  const getPlanetPosition = (index: number, totalPlanets: number, orbitDiameterVw: number, planetDiameterVw: number) => {
    const angleRad = (2 * Math.PI) * (index / totalPlanets) - Math.PI; // Calculate angle in radians
    const orbitRadiusVw = orbitDiameterVw / 2; // Radius of the orbit in vw
    const planetRadiusVw = planetDiameterVw / 2; // Radius of the planet in vw

    // Adjust the position to start from the top of the halo and move clockwise
    const top = 9.5 - (orbitRadiusVw * Math.cos(angleRad)) - planetRadiusVw;
    const left = 30.5 + (orbitRadiusVw * Math.sin(angleRad)) - planetRadiusVw;

    return {
      top: `${top}vw`,
      left: `${left}vw`,
      transform: 'translate(-50%, -50%)', // Center the planet
    };
  };

  return (
    <main className="flex h-screen items-center justify-center p-6 bg-black">
      <div className="w-3/5 relative flex items-center justify-center">
        {/* Orbits */}
        {orbitSizes.map((size, index) => {
          const animationDelay = `${(pulseAnimationDuration / orbitSizes.length) * index * 0.1}s`;
          const rotationAnimation = getRotationAnimation(index);

          return (
            <React.Fragment key={index}>
              <div
                className={`orbit absolute rounded-full border`}
                style={{
                  animation: `${pulseAnimation} ${animationDelay}, ${rotationAnimation}`,
                  // borderWidth: '2px',
                  // borderColor: 'rgba(255, 255, 255, 0.5)',
                  // borderStyle: 'dotted',
                  width: `${size}vw`,
                  height: `${size}vw`,
                }}
              ></div>
              {/* Planet */}
              {
                Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="planet absolute rounded-full bg-green-600 shadow-lg cursor-pointer"
                    style={{
                      width: `${coreSizeBase / 4}vw`, // Size of the planet
                      height: `${coreSizeBase / 4}vw`, // Size of the planet
                      ...getPlanetPosition(index, 3, innerHaloSize, coreSizeBase / 4),
                    }}
                    // onClick handler to set the message based on the planet clicked
                  ></div>
                ))
              }
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
