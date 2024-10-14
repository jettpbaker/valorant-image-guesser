export default function Header({ score, highScore }) {
  return (
    <header>
      <h1>ValoMemory</h1>
      <section className="score">
        <h3>Score: {score}</h3>
        <p>High Score: {highScore}</p>
      </section>
    </header>
  );
}
