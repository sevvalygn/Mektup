"use client";

import { useState } from "react";
import Zarf from "@/components/Zarf";
import MektupOverlay from "@/components/MektupOverlay";

export default function Home() {
  const [mektupAcik, setMektupAcik] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <Zarf onClick={() => setMektupAcik(true)} />
      <MektupOverlay
        isOpen={mektupAcik}
        onClose={() => setMektupAcik(false)}
      />
    </main>
  );
}
