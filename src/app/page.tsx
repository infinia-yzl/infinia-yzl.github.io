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

  return (
    <main className="flex h-screen items-center justify-center p-6 bg-black">
      <div className="relative flex items-center justify-center">
        {/* Orbits */}
        {orbitSizes.map((size, index) => {
          // Calculate the delay needed for each halo's animation
          // The delay for each halo is (duration of pulse / number of halos) * index of halo
          // Adjust the multiplier (0.1 here) based on the percentage of the pulse animation
          const animationDelay = `${(pulseAnimationDuration / orbitSizes.length) * index * 0.1}s`;
          const rotationAnimation = getRotationAnimation(index);
          return (
            <div
              key={index}
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
