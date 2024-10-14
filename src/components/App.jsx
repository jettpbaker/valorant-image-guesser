import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import getCleanedAgentData from "./Data";
import { useEffect, useState } from "react";

let agentDataFetched = false;

function App() {
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

  return (
    <>
      <Header />
      <Main agents={randomAgents} />
      <Footer handleRandomiseAgents={handleRandomiseAgents} />
    </>
  );
}

export default App;
