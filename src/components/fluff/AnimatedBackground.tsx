"use client";

import React, { useEffect } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  color: [number, number, number];
}

export default function AnimatedBackground() {
  useEffect(() => {
    const canvas = document.getElementById("background") as HTMLCanvasElement;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let w = window.innerWidth;
    let h = window.innerHeight;

    const setCanvasExtents = () => {
      canvas.width = w;
      canvas.height = h;
    };

    setCanvasExtents();

    const debouncedResize = () => {
      setTimeout(() => {
        w = window.innerWidth;
        h = window.innerHeight;
        setCanvasExtents();
      }, 100);
    };

    const randomColor = (): [number, number, number] => {
      const colors: [number, number, number][] = [
        [255, 0, 0], // Red
        [0, 255, 0], // Green
        [0, 0, 255], // Blue
        [255, 255, 0], // Yellow
        [255, 255, 255], // Yellow
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const makeStars = (count: number): Star[] => {
      return Array.from({ length: count }, () => ({
        x: Math.random() * 1600 - 800,
        y: Math.random() * 900 - 450,
        z: Math.random() * 1000,
        color: randomColor(),
      }));
    };

    let stars = makeStars(15);

    const clearCanvas = () => {
      context.fillStyle = "black";
      context.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawCircle = (x: number, y: number, radius: number, brightness: number, color: [number, number, number]) => {
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${brightness})`;
      context.fill();
    };

    const moveStars = (distance: number) => {
      stars.forEach((star) => {
        star.z -= distance;
        if (star.z <= 1) star.z += 1000;
      });
    };

    let prevTime = 0;
    const renderFrame = (time: number) => {
      const elapsed = time - prevTime;
      prevTime = time;

      moveStars(elapsed * 0.4);
      clearCanvas();

      const cx = w / 2;
      const cy = h / 2;

      stars.forEach((star) => {
        const x = cx + star.x / (star.z * 0.001);
        const y = cy + star.y / (star.z * 0.001);

        if (x >= 0 && x < w && y >= 0 && y < h) {
          const brightness = 1 - (star.z / 1000) ** 2;
          const radius = 30;
          drawCircle(x, y, radius, brightness, star.color);
        }
      });

      requestAnimationFrame(renderFrame);
    };

    requestAnimationFrame((time) => {
      prevTime = time;
      requestAnimationFrame(renderFrame);
    });

    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  return (
    <canvas
      id="background"
      style={{
        padding: 0,
        margin: 0,
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -10,
        opacity: 1,
        pointerEvents: "none",
        mixBlendMode: "screen",
      }}
    />
  );
}
