"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ayfema from "../../../public/assets/logos/ayfema-1.png";
import bestKebap from "../../../public/assets/logos/BestKebap.png";
import beymen from "../../../public/assets/logos/beymen.png";
import graffen from "../../../public/assets/logos/GRFlogo.png";
import istanbulFood from "../../../public/assets/logos/istanbulfood.png";
import makkssoo from "../../../public/assets/logos/makkssoo.webp";
import yms from "../../../public/assets/logos/yms.png";
import agromen from "../../../public/assets/logos/agromen.png";
import somers from "../../../public/assets/logos/somers.png";
import mfh from "../../../public/assets/logos/mfh.png";
import anatolia from "../../../public/assets/logos/anatolia.png";

const InfiniteCarousel = () => {
  const baseImages = [ayfema, bestKebap, beymen, graffen, istanbulFood, makkssoo, yms, agromen, somers, mfh, anatolia];
  const [images, setImages] = useState([...baseImages, ...baseImages, ...baseImages]);
  const [position, setPosition] = useState(0);
  const [speed, setSpeed] = useState(0.5);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setSpeed(1); // Faster speed for small screens
      } else {
        setSpeed(0.5); // Normal speed for larger screens
      }
    };

    // Initial check
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    const animation = setInterval(() => {
      setPosition((prev) => {
        const newPosition = prev - speed;

        if (newPosition % 33.333 === 0) {
          setImages((currentImages) => [...currentImages, ...baseImages]);
        }

        return newPosition;
      });
    }, 30);

    return () => {
      clearInterval(animation);
      window.removeEventListener("resize", handleResize);
    };
  }, [speed]); // Added speed to dependency array

  return (
    <div ref={containerRef} className="overflow-hidden relative w-full h-32 lg:h-[200px]">
      <div
        style={{
          display: "flex",
          transform: `translateX(${position}%)`,
          transition: "transform 0.1s linear",
          gap: "2rem",
        }}
      >
        {images.map((image, index) => (
          <div
            key={`${index}-${position}`}
            style={{
              flex: "0 0 33.333%",
              height: "100%",
              padding: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={image}
              alt={`Logo ${index}`}
              style={{
                width: "auto",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
