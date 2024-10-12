import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

// function getImage() {
//   fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
//     .then(function (response) {
//       console.log(response.json());
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// }

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
