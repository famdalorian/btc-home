import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
//INTERNAL IMPORT
import Style from "./NFTCard.module.css";
import images from "../../src/Images/BTC.jpeg";

const NFTCard = () => {
  const CardArray = [images.image1, images.image2, images.image3];
  const [like, setLike] = useState(true);
  const likeNFT = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };
  return (
    <div className={Style.NFTCard}>
      {CardArray.map((el, i) => (
        <div className={Style.NFTCard_box} key={i + 1}>
          <div className={Style.NFTCard_box_img}>
          </div>
          <div className={Style.NFTCard_box_update}>
            <div className={Style.NFTCard_box_update_left}>
              <div
                className={Style.NFTCard_box_update_left_like}
                onClick={() => likeNFT()}
              >
                {like ? (
                  <AiOutlineHeart />
                ) : (
                  <AiFillHeart
                    className={Style.NFTCard_box_update_left_like_icon}
                  />
                )}
                {""}22
              </div>
            </div>

            <div className={Style.NFTCard_box_update_right}>
              <div className={Style.NFTCard_box_update_right_info}>
                <small>Remaining time</small>
                <p>3h:15m:20s</p>
              </div>
            </div>
          </div>
          <div className={Style.NFTCard_box_update_details}>
            <div className={Style.NFTCard_box_update_details_price}>
              <div className={Style.NFTCard_box_update_details_price_box}>
                <h4>Clone #17373</h4>
                <div className={Style.NFTCard_box_update_details_price_box_box}>
                  <div
                    className={Style.NFTCard_box_update_details_price_box_bid}
                  >
                    <small>Current Bid</small>
                    <p>1.500 ETH</p>
                  </div>
                  <div
                    className={Style.NFTCard_box_update_details_price_box_stock}
                  >
                    <small>In Stock </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCard;
