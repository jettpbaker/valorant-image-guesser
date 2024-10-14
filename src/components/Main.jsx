import { useState } from "react";
import Card from "./Card";

export default function Main({
  agents,
  score,
  increaseScore,
  resetScore,
  handleRandomiseAgents,
  highScore,
  increaseHighScore,
}) {
  const [selections, setSelections] = useState([]);

  function handleSelection(agentName) {
    const newSelections = [...selections, agentName];
    const newScore = score + 1;

    if (selections.filter((agent) => agent === agentName).length > 0) {
      resetScore();
    } else {
      increaseScore();
      if (newScore > highScore) {
        increaseHighScore();
      }
      setSelections(newSelections);
    }
    handleRandomiseAgents();
    return;
  }

  return (
    <main className="cardContainer">
      {agents.map((agent) => {
        return (
          <Card
            agent={agent}
            key={agent.displayName}
            handleSelection={handleSelection}
          />
          //   <section className="card" key={agent.displayName}>
          //     <div className="cardBorder">
          //       <div className="cardContent">
          //         <img src={agent.imgUrl} alt={agent.displayName} />
          //         <div className="cardName">
          //           <h2>{agent.displayName}</h2>
          //         </div>
          //       </div>
          //     </div>
          //   </section>
        );
      })}
    </main>
  );
}
