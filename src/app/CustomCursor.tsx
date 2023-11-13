"use client"

import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    const moveCursor = (e: { clientX: any; clientY: any; }) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', moveCursor);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <style jsx global>{`
      .cursor {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 10000;
        mix-blend-mode: difference;
        background-color: white;
      }
      body {
        cursor: none;
      }
    `}</style>
  );
}
