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
};

let pageNumber = 4;

const Instructions = () => {
  return (
    <>
      <Look images={images} pageNumber={pageNumber} route="/game" />
    </>
  );
};

export default Instructions;
