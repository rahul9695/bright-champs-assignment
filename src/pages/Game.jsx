import Look from "../components/Look";
import backImg from "../assets/back.png";
import bananaCardImg from "../assets/banana-2.png";
import playImg from "../assets/play.png";
import oneImg from "../assets/1.png";
import twoImg from "../assets/2.png";
import threeImg from "../assets/3.png";
import pinkCardImg from "../assets/pinkCard.png";
import applePinkCardImg from "../assets/applePink.png";
import blueCardImg from "../assets/blueCard.png";
import groupCardImg from "../assets/groupCard.png";
import plainPinkCardImg from "../assets/plainpinkCard.png";
import plainBlueCardImg from "../assets/plainblueCard.png";
import appleImg from "../assets/apple.png";
import bananaImg from "../assets/banana.png";
import mangoImg from "../assets/mango.png";
import orangeImg from "../assets/orange.png";
import pineappleImg from "../assets/pineapple.png";
import strawberryImg from "../assets/strawberry.png";


const images = {
  backImg,
  bananaCardImg,
  playImg,
  oneImg,
  twoImg,
  threeImg,
  pinkCardImg,
  applePinkCardImg,
  blueCardImg,
  groupCardImg,
  plainPinkCardImg,
  plainBlueCardImg,
  appleImg,
  bananaImg,
  mangoImg,
  orangeImg,
  pineappleImg,
  strawberryImg
};

let pageNumber = 5;

const Game = () => {
  return (
    <>
      <Look images={images} pageNumber={pageNumber} />
    </>
  );
};

export default Game;
