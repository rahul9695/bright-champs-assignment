import Look from "../components/Look";
import happyMonkey from "../assets/happyMonkey.png";
import messageBox from "../assets/messagebox.png";
import startImg from "../assets/start.png";
import nextImg from "../assets/next.png";
import backImg from "../assets/back.png";
import yesImg from "../assets/yes.png";
import bananaCardImg from "../assets/banana-2.png";

const images = {
  happyMonkey,
  messageBox,
  startImg,
  nextImg,
  backImg,
  yesImg,
  bananaCardImg
};

let introText = "Can you help me get some? 🤔";
let pageNumber = 3;

const Intro3 = () => {
  return (
    <>
      <Look
        images={images}
        route="/instructions"
        introText={introText}
        pageNumber={pageNumber}
      />
    </>
  );
};

export default Intro3;
