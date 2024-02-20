export const ParticleSphere = () => {
  const num = 300;

  const particles = Array.from({ length: num });

  return (
    <div className="particles-container">
      {particles.map((index) => (
        <div key={index} className="particle" style={`root:--index: ${num - index}`} />
      ))}
    </div>
  );
};
