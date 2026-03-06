"use client";

import Image from "next/image";

interface ZarfProps {
  onClick?: () => void;
}

export default function Zarf({ onClick }: ZarfProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="block max-w-[90%] max-h-[90vh] w-auto h-auto object-contain cursor-pointer shadow-[0_12px_40px_rgba(0,0,0,0.5)] hover:opacity-95 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#1a1a2e]"
      aria-label="Mektup zarfı — tıklayarak aç"
    >
      <Image
        src="/zarf.png"
        alt="Mektup zarfı"
        width={400}
        height={300}
        className="w-full h-auto"
        priority
      />
    </button>
  );
}
