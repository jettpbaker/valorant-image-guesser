import "../styles/App.css";
import LoadingIndicator from "./LoadingIndicator";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import getCleanedAgentData from "./Data";
import { useEffect, useState } from "react";

let agentDataFetched = false;

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [agents, setAgents] = useState([]);
  const [randomAgents, setRandomAgents] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    const fetchData = async () => {
      if (!agentDataFetched) {
        const data = await getCleanedAgentData();
        setAgents(data);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    function getRandomAgents() {
      const shuffledArr = agents.sort(() => 0.5 - Math.random());
      const randomisedAgents = shuffledArr.slice(0, 10);

      setRandomAgents(randomisedAgents);
    }
    getRandomAgents();
  }, [agents]);

  function handleRandomiseAgents() {
    const shuffledArr = agents.sort(() => 0.5 - Math.random());
    const randomisedAgents = shuffledArr.slice(0, 10);

    setRandomAgents(randomisedAgents);
  }

  function increaseScore() {
    setScore((prevScore) => prevScore + 1);
  }

  function resetScore() {
    setScore(0);
  }

  function increaseHighScore() {
    setHighScore((prev) => prev + 1);
  }

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <LoadingIndicator />
        </div>
      ) : (
        <>
          <Header score={score} highScore={highScore} />
          <Main
            agents={randomAgents}
            score={score}
            increaseScore={increaseScore}
            resetScore={resetScore}
            handleRandomiseAgents={handleRandomiseAgents}
            highScore={highScore}
            increaseHighScore={increaseHighScore}
          />
          <Footer handleRandomiseAgents={handleRandomiseAgents} />
        </>
      )}
    </>
  );
}

export default App;
