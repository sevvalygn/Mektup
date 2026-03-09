"use client";

interface ZarfProps {
  onClick?: () => void;
}

export default function Zarf({ onClick }: ZarfProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="block max-w-[90%] max-h-[90vh] w-auto h-auto cursor-pointer shadow-[0_12px_40px_rgba(0,0,0,0.5)] hover:opacity-95 transition-opacity focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white bg-transparent border-0 p-0"
      aria-label="Mektup zarfı — tıklayarak aç"
    >
      {/* public/zarf.png olmalı; Next.js bunu /zarf.png olarak sunar */}
      <img
        src="/zarf.png"
        alt="Mektup zarfı"
        className="block max-w-full max-h-[90vh] w-auto h-auto object-contain pointer-events-none"
        width={400}
        height={300}
        draggable={false}
      />
    </button>
  );
}
