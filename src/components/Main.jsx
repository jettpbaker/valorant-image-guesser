import data from "./Data";
import Card from "./Card";

export default function Main() {
  return (
    <main className="cardContainer">
      {data.map((agent) => {
        return (
          <Card agent={agent} key={agent.displayName} />
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
