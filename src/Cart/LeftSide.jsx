import React, { useState, useEffect } from "react";
import img1 from "./Images/img1.webp";
import img2 from "./Images/img2.webp";
import Card from "./Card";

function LeftSide({
  quatity1,
  quatity2,
  itemPrice1,
  itemPrice2,
  totalPrice,
  handleQuatityInc1,
  handleQuatityDec1,
  handleQuatityInc2,
  handleQuatityDec2,
}) {
  console.log("priops of left cart ", itemPrice1, itemPrice2);
  return (
    <>
      <Card
        cart_items={<h2>Cart(2 items)</h2>}
        img={img1}
        price={itemPrice1}
        quatity={quatity1}
        handleQuatityInc={handleQuatityInc1}
        handleQuatityDec={handleQuatityDec1}
      />
      <Card
        img={img2}
        price={itemPrice2}
        quatity={quatity2}
        handleQuatityInc={handleQuatityInc2}
        handleQuatityDec={handleQuatityDec2}
      />
    </>
  );
}

export default LeftSide;
