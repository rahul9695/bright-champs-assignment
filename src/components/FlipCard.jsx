import PropTypes from "prop-types";
import { useState } from "react";
import "../App.css";

const FlipCard = ({ images, image, type, key }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPinkCardFlipped, setIsPinkCardFlipped] = useState(false);
  const [isBlueCardFlipped, setIsBlueCardFlipped] = useState(false); 
  const [flippedCardKey, setFlippedCardKey] = useState(null);

  const handleClick = (type, key) => {
    if (type === "pink" && !isPinkCardFlipped && !isBlueCardFlipped) {
      // Flip the pink card only if no other pink or blue card is flipped
      setIsFlipped(true);
      setIsPinkCardFlipped(true);
      setFlippedCardKey(key);
    } else if (type === "blue" && !isPinkCardFlipped) {
      // Flip the blue card only if no pink card is flipped
      setIsFlipped(true);
      setIsBlueCardFlipped(true);
      setFlippedCardKey(key);
    } else if (type === "blue" && isPinkCardFlipped && key === flippedCardKey) {
      // If a pink card is flipped and it matches the current blue card, keep both cards flipped
      setIsFlipped(true);
      setIsBlueCardFlipped(true);
      setIsPinkCardFlipped(true);
    } else {
      // If any other condition is not met, reflip both cards to their original state
      setIsFlipped(false);
      setIsPinkCardFlipped(false);
      setIsBlueCardFlipped(false);
      setFlippedCardKey(null);
    }
  };
  

  return (
    <div className={isFlipped ? "flipCard" : ""}>
      {/* Front of the card */}
      <div onClick={() => handleClick(type, key)} className={`cursor-pointer`}>
        <img
          src={type === "pink" ? images.pinkCardImg : images.blueCardImg}
          alt=""
          className={`w-[140px] ${isFlipped ? "hidden" : ""}`}
        />
      </div>

      {/* Back of the card */}
      <div className="cursor-pointer relative">
        <img
          src={
            type === "pink" ? images.plainPinkCardImg : images.plainBlueCardImg
          }
          alt=""
          className={`w-[140px] ${isFlipped ? "" : "hidden"}`}
        />
        <div className={`${isFlipped ? "visible" : "hidden"}`}>
          <img
            src={image}
            alt=""
            className="w-[50px] absolute top-0 bottom-0 left-0 right-0 m-auto"
          />
        </div>
      </div>
    </div>
  );
};

FlipCard.propTypes = {
  images: PropTypes.shape({
    pinkCardImg: PropTypes.string,
    blueCardImg: PropTypes.string,
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
  pageNumber: PropTypes.number,
  image: PropTypes.string,
  type: PropTypes.oneOf(["pink", "blue"]),
  key: PropTypes.number,
};

export default FlipCard;
