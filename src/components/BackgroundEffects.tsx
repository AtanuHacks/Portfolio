
const particles = [
  { left: "8%", top: "22%", delay: "0s" },
  { left: "19%", top: "72%", delay: "2s" },
  { left: "32%", top: "38%", delay: "4s" },
  { left: "48%", top: "84%", delay: "1s" },
  { left: "62%", top: "18%", delay: "3s" },
  { left: "76%", top: "62%", delay: "5s" },
  { left: "91%", top: "30%", delay: "2.5s" },
];

export default function BackgroundEffects() {
  return (
    <div className="global-background" aria-hidden="true">
      <div className="ambient-glow glow-cyan" />
      <div className="ambient-glow glow-purple" />
      <div className="ambient-glow glow-blue" />

      <div className="background-grid" />

      {particles.map((particle, index) => (
        <span
          key={index}
          className="background-particle"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
          }}
        />
      ))}

      <span className="code-symbol symbol-one">{"{ }"}</span>
      <span className="code-symbol symbol-two">{"</>"}</span>
      <span className="code-symbol symbol-three">AI</span>
      <span className="code-symbol symbol-four">01</span>
    </div>
  );
}
