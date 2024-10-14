export const data = [
  {
    displayName: "Gekko",
    imgUrl: "src/assets/images/test-image2.png",
  },
  {
    displayName: "Jett",
    imgUrl: "src/assets/images/test-image2.png",
  },
  {
    displayName: "Phoenix",
    imgUrl: "src/assets/images/test-image2.png",
  },
  {
    displayName: "Sage",
    imgUrl: "src/assets/images/test-image2.png",
  },
  {
    displayName: "Brimstone",
    imgUrl: "src/assets/images/test-image2.png",
  },
  {
    displayName: "Reyna",
    imgUrl: "src/assets/images/test-image2.png",
  },
  {
    displayName: "Sova",
    imgUrl: "src/assets/images/test-image2.png",
  },
  {
    displayName: "Killjoy",
    imgUrl: "src/assets/images/test-image2.png",
  },
  {
    displayName: "Raze",
    imgUrl: "src/assets/images/test-image2.png",
  },
  {
    displayName: "Cypher",
    imgUrl: "src/assets/images/test-image2.png",
  },
];

async function requestAgentData() {
  const url = "https://valorant-api.com/v1/agents?isPlayableCharacter=true";

  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
}

function cleanAgentData(data) {
  return data.map((agent) => ({
    displayName: agent.displayName,
    fullPortrait: agent.fullPortrait,
  }));
}

async function getCleanedAgentData() {
  const agents = [];
  try {
    const rawData = await requestAgentData();
    const cleanedAgentData = cleanAgentData(rawData.data);
    agents.push(...cleanedAgentData);
    // console.log("Fetched Agents: ", agents);
    return agents;
  } catch (error) {
    console.error("Error in getCleanedAgentData:", error.message);
    return agents;
  }
}

export default getCleanedAgentData;
