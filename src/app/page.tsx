import React from "react";
export default function Home() {
  // Define the base size for the sun or galaxy core
  const coreSizeBase = 20; // 20vw for the core size

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
  const getPlanetPosition = (orbitSize) => {
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
      <div className="relative flex items-center justify-center">
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
          className="z-10 bg-white rounded-full flex items-center justify-center"
          style={{
            // animation: `${pulseAnimation}`,
            width: `${coreSizeBase}vw`,
            height: `${coreSizeBase}vw`,
          }}
        >
          <span className="text-black font-bold" style={{ fontSize: `${coreSizeBase / 8}vw` }}>infinia.space</span>
        </div>

        {/* Planets */}
        {/* ... */}
      </div>
    </main>
  );
}
