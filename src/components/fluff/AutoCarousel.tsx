"use client";

import { useEffect, useRef } from "react";
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
  const containerRef = useRef(null);
  const animationSpeedRef = useRef(0.3); // Default speed
  const isLargeScreenRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    let animationFrame;

    // Update speed and height based on screen size
    const updateAnimationSettings = () => {
      isLargeScreenRef.current = window.innerWidth > 700;
      animationSpeedRef.current = isLargeScreenRef.current ? 0.6 : 0.4;
      container.style.height = isLargeScreenRef.current ? "150px" : "100px";
    };

    // Smoothly reset the position when reaching the end
    const resetPositionIfNeeded = () => {
      const currentTransform = parseFloat(container.style.transform.replace("translateX(", "").replace("px)", "")) || 0;
      const containerWidth = container.scrollWidth / 3; // Only consider a third (base images set)

      if (Math.abs(currentTransform) >= containerWidth) {
        container.style.transition = "none"; // Disable transition for instant reset
        container.style.transform = "translateX(0px)";
        requestAnimationFrame(() => {
          container.style.transition = "transform 0.1s linear"; // Re-enable smooth scrolling
        });
      }
    };

    // Animate the carousel
    const animate = () => {
      const currentTransform = parseFloat(container.style.transform.replace("translateX(", "").replace("px)", "")) || 0;
      container.style.transform = `translateX(${currentTransform - animationSpeedRef.current}px)`;
      resetPositionIfNeeded();
      animationFrame = requestAnimationFrame(animate);
    };

    // Initial setup
    updateAnimationSettings();
    animate();

    // Handle screen resize
    window.addEventListener("resize", updateAnimationSettings);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", updateAnimationSettings);
    };
  }, []);

  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: "100px", // Default height
        transition: "height 0.3s ease",
      }}
    >
      <div
        ref={containerRef}
        style={{
          display: "flex",
          gap: "2rem",
          willChange: "transform",
          transform: "translateX(0px)",
          transition: "transform 0.1s linear", // Smooth scrolling
        }}
      >
        {[...baseImages, ...baseImages, ...baseImages].map((image, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 auto",
              width: "30%",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={image}
              alt={`Logo ${index}`}
              loading="lazy"
              style={{
                width: "auto",
                height: "100px",
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
