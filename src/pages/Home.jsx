import { useState } from "react";

export default function App() {
  const [accepted, setAccepted] = useState(false);

  const MIN_DISTANCE = 160;

  const randomPosition = () => {
    const angle = Math.random() * 2 * Math.PI;
    const distance = MIN_DISTANCE + Math.random() * 120;

    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    };
  };

  const [noPos, setNoPos] = useState(randomPosition());

  const moveNo = () => {
    setNoPos(randomPosition());
  };

  return (
    <div className="container">
      {!accepted ? (
        <>
          <h1>Shreya will you be my Valentine? 💖</h1>
          <h3>Won't take no for an answer, try me!</h3>
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnd0cG4xenlsaHFxamZmeWtuaTF6ZjJnN2lvaTR2d2ZrOTR5djZubCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YZOsKxJfmvzG0/giphy.gif"
            alt="Please say yes"
            className="gif"
          />
          <div className="buttons">
            <button className="yes" onClick={() => setAccepted(true)}>
              Yes 💘
            </button>

            <button
              className="no"
              style={{
                transform: `translate(${noPos.x}px, ${noPos.y}px)`,
              }}
              onMouseEnter={moveNo}
              onTouchStart={moveNo}
            >
              No ❌
            </button>
          </div>
        </>
      ) : (
        <>
          <h1>🥰 Yayyy! Happy Valentine’s Day 💕</h1>

          {/* 👇 GIF after YES */}
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmF1eHIzM3ZlMmx3MmhheGMyNjc3MDBmNTVybm0zbXc3OWwyM2tudiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/75ZaxapnyMp2w/giphy.gif"
            alt="Happy Valentine"
            className="gif"
          />
        </>
      )}
    </div>
  );
}
