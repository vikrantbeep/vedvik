"use client";
import { useEffect, useState } from "react";

const IMAGES = [
  "https://res.cloudinary.com/dnts8gzbh/image/upload/v1781161089/ChatGPT_Image_Jun_11_2026_12_27_37_PM_u2c56h.png",
  "https://res.cloudinary.com/dnts8gzbh/image/upload/v1779349831/linea1_whfxfo.png",
  "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778842096/IRIX-DL-SIDE_no_sombra-scaled_i1kffr.png",
  "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774877/E2Mcouth_mzicf1.png",
  "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774883/MFtecno_t1p2xp.png",
  "https://res.cloudinary.com/dnts8gzbh/image/upload/v1778774882/Filtec_pjlyz3.png",
  "https://res.cloudinary.com/dnts8gzbh/image/upload/v1780300324/ChatGPT_Image_Jun_1_2026_01_20_59_PM_d2j0ob.png",
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length);
    }, 2000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="aspect-[4/3] w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {IMAGES.map((src, i) => (
          <div key={i} className="w-full h-full flex-shrink-0">
            <img
              src={src}
              alt={`Vedvik Machinery equipment ${i + 1}`}
              className="w-full h-full object-contain"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
