import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../App.css";
import InstructionCard from "./InstructionCard";
import { useEffect, useState } from "react";
import FlipCard from "./FlipCard";

const Look = ({ images, route, introText, pageNumber }) => {
  const [shuffledFruits, setShuffledFruits] = useState([]);
  const [allowFlip, setAllowFlip] = useState("pink");

  useEffect(() => {
    // Extract fruit image URLs from the images object
    const fruitImageURLs = [
      images.orangeImg,
      images.appleImg,
      images.pineappleImg,
      images.strawberryImg,
      images.mangoImg,
      images.bananaImg,
    ];

    // Shuffle the array of fruit image URLs
    const shuffledFruits = shuffleArray(fruitImageURLs);

    // Set the shuffled fruit images
    setShuffledFruits(shuffledFruits);
  }, []); // Run only once on component mount

  const shuffleArray = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const navigate = useNavigate();

  const [timer, setTimer] = useState(60);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setTimer((prev) => prev - 1)
  //   }, 1_000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [timer]);

  return (
    <div className="main">
      {pageNumber === 2 ||
      pageNumber === 3 ||
      pageNumber === 4 ||
      pageNumber === 5 ? (
        <div className="backBtnWrapper" onClick={() => navigate(-1)}>
          <img src={images.backImg} alt="img" />
        </div>
      ) : (
        ""
      )}

      {pageNumber === 3 || pageNumber === 4 || pageNumber === 5 ? (
        <div className="progressBarWrapper">
          <div className="progressBar"></div>
          <img src={images.bananaCardImg} alt="img" />
          {pageNumber === 5 && (
            <div className="text-center font-bold text-[20px] text-[#008000] mt-2 ">
              Time Remaining : <span className="text-[22px]">{timer}</span>{" "}
              <span className="text-[16px]">sec</span>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
      {pageNumber === 1 || pageNumber === 2 || pageNumber === 3 ? (
        <div className="imgContainer">
          <img className="happyMonkey" src={images.happyMonkey} alt="monkey" />
          <div className="msgBoxImgWrapper">
            <img
              className="msgBoxImg"
              src={images.messageBox}
              alt="message box"
            />
            <h2 className="text-[20px]">{introText}</h2>
          </div>
        </div>
      ) : (
        ""
      )}

      {pageNumber === 4 ? (
        <div className="absolute top-[17%] left-0 right-0 mx-auto max-w-[80%] mx-auto flex flex-wrap justify-between p-4">
          <InstructionCard images={images} cardNumber={1} />
          <InstructionCard images={images} cardNumber={2} />
          <InstructionCard images={images} cardNumber={3} />
        </div>
      ) : (
        ""
      )}

      {pageNumber === 5 && (
        <div className="absolute top-[20%] left-0 right-0 mx-auto max-w-[85%] mx-auto flex flex-wrap justify-between p-4">
          <div className="flex max-w-[50%] justify-around flex-wrap mx-auto pr-[20px]">
            {shuffledFruits.map((image, index) => (
              <FlipCard key={index} images={images} image={image} type="pink" allowFlip={allowFlip} setAllowFlip={setAllowFlip} />
            ))}
          </div>
          <div className="flex max-w-[50%] justify-around flex-wrap mx-auto pl-[20px]">
            {shuffledFruits.map((image, index) => (
              <FlipCard key={index} images={images} image={image} type="blue" allowFlip={allowFlip} setAllowFlip={setAllowFlip} />
            ))}
          </div>
        </div>
      )}
      <div className="startImgWrapper" onClick={() => navigate(route)}>
        <img
          src={
            pageNumber === 1
              ? images.startImg
              : pageNumber === 2
              ? images.nextImg
              : pageNumber === 3
              ? images.yesImg
              : pageNumber === 4
              ? images.playImg
              : ""
          }
          alt=""
        />
      </div>
    </div>
  );
};

Look.propTypes = {
  images: PropTypes.shape({
    happyMonkey: PropTypes.string,
    messageBox: PropTypes.string,
    startImg: PropTypes.string,
    nextImg: PropTypes.string,
    backImg: PropTypes.string,
    yesImg: PropTypes.string,
    bananaCardImg: PropTypes.string,
    playImg: PropTypes.string,
    oneImg: PropTypes.string,
    twoImg: PropTypes.string,
    threeImg: PropTypes.string,
    pinkCardImg: PropTypes.string,
    applePinkCardImg: PropTypes.string,
    blueCardImg: PropTypes.string,
    groupCardImg: PropTypes.string,
    plainPinkCardImg: PropTypes.string,
    plainBlueCardImg: PropTypes.string,
    bananaImg: PropTypes.string,
    appleImg: PropTypes.string,
    mangoImg: PropTypes.string,
    orangeImg: PropTypes.string,
    pineappleImg: PropTypes.string,
    strawberryImg: PropTypes.string,
  }).isRequired,
  route: PropTypes.string,
  introText: PropTypes.string,
  pageNumber: PropTypes.number.isRequired,
};

export default Look;
