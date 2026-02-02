import { useEffect, useState } from "react";

export default function RosesForYou() {
  const loadingTexts = [
    "Calculating my love for you…",
    "Counting infinite heartbeats…",
    "Importing kisses…",
    "Overflow error: love too large ❤️",
    "Almost there…",
  ];

  const [loading, setLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [roses, setRoses] = useState([]);

  useEffect(() => {
    if (!loading) return;
    const interval = setInterval(
      () => setTextIndex((i) => (i + 1) % loadingTexts.length),
      1200,
    );
    return () => clearInterval(interval);
  }, [loading]);
  const generateRoses = () => {
    const list = Array.from({ length: 300 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 20 + 16,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.5,
    }));
    setRoses(list);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      generateRoses();
    }, 6500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={styles.container}>
      {loading && (
        <div style={styles.loader}>
          <h1>Loading roses 🌹</h1>
          <p style={styles.blink}>{loadingTexts[textIndex]}</p>
        </div>
      )}

      {!loading && (
        <>
          {roses.map((rose) => (
            <div
              key={rose.id}
              style={{
                ...styles.rose,
                left: `${rose.left}vw`,
                fontSize: rose.size,
                animationDuration: `${rose.duration}s`,
                animationDelay: `${rose.delay}s`,
                opacity: rose.opacity,
              }}
            >
              🌹
            </div>
          ))}

          <div style={styles.message}>I love you more than these roses ❤️</div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    position: "fixed", // 🔥 escape app layout
    inset: 0, // 🔥 full screen
    overflow: "hidden",
    background: "radial-gradient(circle at top, #1a0000, #000)",
    color: "white",
    zIndex: 9999, // 🔥 above Home page
  },
  loader: {
    position: "fixed",
    inset: 0,
    background: "#000",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  blink: {
    animation: "blink 1.5s infinite",
  },
  rose: {
    position: "fixed", // 🔥 key fix
    top: "-50px",
    pointerEvents: "none",
    animationName: "fall",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },

  message: {
    position: "fixed",
    bottom: "40px",
    width: "100%",
    textAlign: "center",
    fontSize: "2rem",
    animation: "fadeIn 3s forwards",
  },
};
