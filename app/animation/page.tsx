"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FIELD_WIDTH = 640;
const FIELD_HEIGHT = 480;
const BALL_SIZE = 80;
const FRAME_RATE = 25;
const SPEED_PER_FRAME = (200 * Math.sqrt(2)) / FRAME_RATE;
const MAX_X = FIELD_WIDTH - BALL_SIZE - 4;
const MAX_Y = FIELD_HEIGHT - BALL_SIZE - 4;

type BallType = "none" | "basketball" | "football" | "volleyball" | "human";
type Position = { x: number; y: number };

const BALL_CHOICES: {
  type: BallType;
  label: string;
  key: string;
  src?: string;
}[] = [
  { type: "none", label: "None", key: "0" },
  {
    type: "basketball",
    label: "Basketball",
    key: "1",
    src: "/animation/basketball.webp",
  },
  {
    type: "football",
    label: "Football",
    key: "2",
    src: "/animation/football.webp",
  },
  {
    type: "volleyball",
    label: "Volleyball",
    key: "3",
    src: "/animation/volleyball.png",
  },
  { type: "human", label: "Human", key: "4", src: "/animation/face.jpg" },
];

const INITIAL_POSITION = { x: MAX_X, y: 0 };

export default function AnimationPage() {
  const [running, setRunning] = useState(false);
  const [ballType, setBallType] = useState<BallType>("none");
  const [position, setPosition] = useState<Position>(INITIAL_POSITION);
  const positionRef = useRef<Position>(INITIAL_POSITION);
  const directionRef = useRef({ x: -1, y: 1 });
  const selectedBall = BALL_CHOICES.find(({ type }) => type === ballType);

  useEffect(() => {
    if (!running) return;

    const timer = window.setInterval(() => {
      const current = positionRef.current;
      let nextX = current.x + directionRef.current.x * SPEED_PER_FRAME;
      let nextY = current.y + directionRef.current.y * SPEED_PER_FRAME;

      if (nextX >= MAX_X) {
        nextX = MAX_X - (nextX - MAX_X);
        directionRef.current.x = -1;
      } else if (nextX <= 0) {
        nextX = -nextX;
        directionRef.current.x = 1;
      }

      if (nextY >= MAX_Y) {
        nextY = MAX_Y - (nextY - MAX_Y);
        directionRef.current.y = -1;
      } else if (nextY <= 0) {
        nextY = -nextY;
        directionRef.current.y = 1;
      }

      const nextPosition = { x: nextX, y: nextY };
      positionRef.current = nextPosition;
      setPosition(nextPosition);
    }, 1000 / FRAME_RATE);

    return () => window.clearInterval(timer);
  }, [running]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLElement) {
        const tagName = event.target.tagName;
        if (tagName === "INPUT" || tagName === "TEXTAREA") return;
      }

      if (event.code === "Space") {
        event.preventDefault();
        setRunning((current) => !current);
        return;
      }

      const choice = BALL_CHOICES.find(({ key }) => key === event.key);
      if (choice) setBallType(choice.type);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="mt-4 px-4" aria-labelledby="animation-title">
      <h1
        id="animation-title"
        className="text-center text-xl font-medium text-gray-900"
      >
        68083016 ชัยนันท์ ธรรมสา
      </h1>

      <div
        role="img"
        aria-label="สนามสำหรับเล่นแอนิเมชันลูกบอล"
        className="relative mx-auto mt-3 overflow-hidden rounded-md border-2 border-black shadow-sm"
        style={{
          width: "min(640px, calc(100vw - 2rem))",
          aspectRatio: "4 / 3",
          backgroundColor: "#d9b07c",
          backgroundImage: "url('/animation/wood.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute rounded-full border-2 border-gray-900"
          style={{
            top: `${(position.y / FIELD_HEIGHT) * 100}%`,
            left: `${(position.x / FIELD_WIDTH) * 100}%`,
            width: `${(BALL_SIZE / FIELD_WIDTH) * 100}%`,
            aspectRatio: "1 / 1",
          }}
        >
          {selectedBall?.src && (
            <Image
              src={selectedBall.src}
              width={80}
              height={80}
              alt=""
              className={`h-full w-full object-contain ${
                ballType === "human" ? "rounded-full object-cover" : ""
              }`}
            />
          )}
        </div>
      </div>

      <div
        className="mx-auto mt-2 flex flex-wrap items-center justify-between gap-2"
        style={{ width: "min(640px, calc(100vw - 2rem))" }}
      >
        <button
          type="button"
          aria-pressed={running}
          onClick={() => setRunning((current) => !current)}
          className={`rounded px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
            running
              ? "bg-amber-600 hover:bg-amber-700 focus-visible:outline-amber-600"
              : "bg-green-700 hover:bg-green-800 focus-visible:outline-green-700"
          }`}
        >
          {running ? "Pause" : "▷ Play"}
        </button>

        <div className="flex flex-wrap justify-end gap-2">
          {BALL_CHOICES.map(({ type, label }) => (
            <button
              key={type}
              type="button"
              aria-pressed={ballType === type}
              onClick={() => setBallType(type)}
              className="rounded-md border border-gray-400 bg-white px-3 py-1.5 text-sm text-blue-800 shadow-sm transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
