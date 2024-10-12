import data from "./Data";

export default function Main() {
  return (
    <main className="cardContainer">
      {data.map((agent) => {
        return (
          <section className="card" key={agent.displayName}>
            <div className="cardBorder"></div>
            <div className="cardContent">
              <img src={agent.imgUrl} alt={agent.displayName} />
              <div className="cardName">
                <h2>{agent.displayName}</h2>
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
