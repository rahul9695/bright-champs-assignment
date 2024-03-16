import PropTypes from "prop-types";
import "../App.css";

const InstructionCard = ({ images, cardNumber }) => {
  return (
    <div className="bg-white h-[350px] min-w-[280px] rounded-[50px]">
      <div className="flex w-[100%] h-[200px] relative">
        <img
          src={
            cardNumber === 1
              ? images.pinkCardImg
              : cardNumber === 2
              ? images.blueCardImg
              : cardNumber === 3
              ? images.groupCardImg
              : ""
          }
          alt=""
          className="h-[90%] absolute left-[20%] top-[5%] z-[10]"
        />
        <img
          src={cardNumber === 1 ? images.applePinkCardImg : ""}
          alt=""
          className="h-[90%] absolute left-[32%] top-[5%] z-[20]"
        />
      </div>
      <div className="flex pt-2">
        <div>
          <img
            src={
              cardNumber === 1
                ? images.oneImg
                : cardNumber === 2
                ? images.twoImg
                : cardNumber === 3
                ? images.threeImg
                : ""
            }
            alt=""
            className="absolute w-[45px]"
          />
        </div>
        <div className="text-center flex flex-col w-[65%] mx-auto">
          {cardNumber === 3 ? (
            <span className="text-[#A6C930] font-bold text-[18px]">
              If they’re the same
            </span>
          ) : (
            ""
          )}
          <span className="text-[28px] font-bold text-[#11AEC6]">
            {cardNumber === 1
              ? "Select a pink Card"
              : cardNumber === 2
              ? "Select a blue card."
              : cardNumber === 3
              ? "It's a match!"
              : ""}
          </span>
          <span className="text-[#A6C930] font-bold text-[18px]">
            {cardNumber === 1
              ? "It has images"
              : cardNumber === 2
              ? "It has alphabets."
              : cardNumber === 3
              ? "Otherwise retry :("
              : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

InstructionCard.propTypes = {
  images: PropTypes.shape({
    oneImg: PropTypes.string,
    twoImg: PropTypes.string,
    threeImg: PropTypes.string,
    pinkCardImg: PropTypes.string,
    applePinkCardImg: PropTypes.string,
    blueCardImg: PropTypes.string,
    groupCardImg: PropTypes.string,
  }).isRequired,
  pageNumber: PropTypes.number,
  cardNumber: PropTypes.number,
};

export default InstructionCard;
