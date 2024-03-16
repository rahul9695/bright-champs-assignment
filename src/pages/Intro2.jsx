import Look from "../components/Look";
import happyMonkey from "../assets/happyMonkey.png";
import messageBox from "../assets/messagebox.png";
import startImg from "../assets/start.png";
import nextImg from "../assets/next.png";
import backImg from "../assets/back.png";

const images = {
  happyMonkey,
  messageBox,
  startImg,
  nextImg,
  backImg
};

let introText = "Hi, I am Mizo and I love bananas 🍌";
let pageNumber = 2;

function IntroTwo() {
  return (
    <>
      <Look
        images={images}
        route="/intro3"
        introText={introText}
        pageNumber={pageNumber}
      />
    </>
  );
}

export default IntroTwo;
