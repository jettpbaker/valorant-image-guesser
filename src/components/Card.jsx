import { useState } from "react";

function Card({ agent }) {
  const [cursorPosition, setCursorPosition] = useState({
    x: undefined,
    y: undefined,
  });

  function handleCursorMove(e) {
    const { clientX, clientY } = e;

    const cardRect = e.currentTarget.getBoundingClientRect();

    const x = Math.floor(clientX - cardRect.left);
    const y = Math.floor(clientY - cardRect.top);

    const newCursorPosition = { x: x, y: y };

    setCursorPosition(newCursorPosition);
  }

  return (
    <section className="card">
      <div
        className="cardBorder"
        onMouseMove={handleCursorMove}
        style={{
          "--positionX": `${cursorPosition.x}px`,
          "--positionY": `${cursorPosition.y}px`,
        }}
      >
        <div className="cardContent">
          <img src={agent.fullPortrait} alt={agent.displayName} />
          <div className="cardName">
            <h2>{agent.displayName}</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
