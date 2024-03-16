import "./App.css";
import happyMonkey from "./assets/happyMonkey.png";
import messageBox from "./assets/messagebox.png";
import startImg from "./assets/start.png";
import Look from "./components/Look";

const images = {
  happyMonkey,
  messageBox,
  startImg,
};

let introText = "Welcome Kiddo !";
let pageNumber = 1;

function App() {
  return (
    <>
      <div className="App">
        <Look
          images={images}
          route="intro2"
          introText={introText}
          pageNumber={pageNumber}
        />
      </div>
    </>
  );
}

export default App;
