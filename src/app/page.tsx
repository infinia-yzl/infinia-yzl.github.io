"use client"

import {animated, useSpring } from "@react-spring/web";
import React, {useEffect, useState} from "react";

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

  const [scrollY, setScrollY] = useState(0);

  const [galaxyOneProps, setGalaxyOneProps] = useSpring(() => ({
    scale: 1,
    opacity: 1,
  }));

  const [galaxyTwoProps, setGalaxyTwoProps] = useSpring(() => ({
    scale: 0.5, // start smaller as if it's further away
    opacity: 0,
  }));

  const handleScroll = () => {
    const posY = window.scrollY;
    setScrollY(posY);

    // Here you'll need to calculate the scale based on posY for both galaxies
    // This is a simplistic approach and would need to be refined
    const newScaleOne = 1 - posY / 1000; // Example calculation
    const newScaleTwo = Math.max(0, 2.2 - posY / 1000); // Ensure scale does not go below 0

    setGalaxyOneProps({ scale: newScaleOne, opacity: newScaleOne });
    setGalaxyTwoProps({ scale: newScaleTwo, opacity: Math.min(1, posY / 500) });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <animated.div
        style={{
          transform: galaxyOneProps.scale.to(s => `scale(${s})`),
          opacity: galaxyOneProps.opacity,
        }}
      >
        <section className="h-screen flex justify-center items-center">
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
                      width: `${size}vw`,
                      height: `${size}vw`,
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
              <h1 className="text-white font-thin"
                  style={{fontSize: `${coreSizeBase / 8}vw`}}>infinia.space</h1>
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
                    {isDifferentSize ? <br/> : null}
                    {!isDifferentSize && index !== 0 ? <span className="mx-2">·</span> : null}
                    <span className={`${fontSize} inline-block mb-2`}>
                    {tech.name}
                  </span>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </section>
      </animated.div>
      <animated.div
        style={{
          transform: galaxyTwoProps.scale.to(s => `scale(${s})`),
          opacity: galaxyTwoProps.opacity,
        }}
      >
        <section className="h-screen flex justify-center items-center">
          <div className="w-2/5 p-4">
            <h2 className="font-thin text-xl mb-2">Cake Group</h2>
            <p className="mb-2">Lorem ipsum dolor sit amet...</p>
          </div>
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
                      width: `${size}vw`,
                      height: `${size}vw`,
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
              <h1 className="text-white font-thin"
                  style={{fontSize: `${coreSizeBase / 8}vw`}}>Work Experience</h1>
            </div>
          </div>
        </section>
      </animated.div>
    </main>
  );
}
