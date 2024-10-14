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
    return agents;
  } catch (error) {
    console.error("Error in getCleanedAgentData:", error.message);
    return agents;
  }
}

export default getCleanedAgentData;
