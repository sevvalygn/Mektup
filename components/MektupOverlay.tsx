"use client";

interface MektupOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MektupOverlay({ isOpen, onClose }: MektupOverlayProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-5"
      role="dialog"
      aria-modal="true"
      aria-label="Mektup"
    >
      <div className="relative w-[90%] max-w-[480px] max-h-[85vh] overflow-y-auto rounded-sm bg-[#fffef9] p-12 shadow-[0_16px_48px_rgba(0,0,0,0.3)] text-[#2c2c2c] font-serif text-[17px] leading-[1.7]">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full border-0 bg-[#eee] text-[#555] text-xl leading-none cursor-pointer hover:bg-[#ddd] focus:outline-none focus:ring-2 focus:ring-[#999]"
          aria-label="Mektubu kapat"
        >
          ×
        </button>
        <div className="pt-4">
          Mektup içeriği buraya gelecek.
        </div>
      </div>
    </div>
  );
}
