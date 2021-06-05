import React, { useState, useEffect } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function Cart() {
  const [quatity1, setQuatity1] = useState(0);
  const [itemPrice1, setItemPrice1] = useState(0);
  const [quatity2, setQuatity2] = useState(0);
  const [itemPrice2, setItemPrice2] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleQuatityInc1 = () => {
    setQuatity1(quatity1 + 1);
    setItemPrice1(itemPrice1 + 15);
  };
  const handleQuatityDec1 = () => {
    if (quatity1 > 1) {
      setQuatity1(quatity1 - 1);
      setItemPrice1(itemPrice1 - 15);
    } else if (quatity1 < 0) {
      setQuatity1(0);
    }
  };
  const handleQuatityInc2 = () => {
    setItemPrice2(itemPrice2 + 15);
    setQuatity2(quatity2 + 1);
  };
  const handleQuatityDec2 = () => {
    if (quatity2 > 1) {
      setQuatity2(quatity2 - 1);
      setItemPrice2(itemPrice2 - 15);
    } else if (quatity2 < 1) {
      setQuatity2(1);
      setItemPrice2(15);
    }
  };
  useEffect(() => {
    setTotalPrice(itemPrice1 + itemPrice2);
    console.log(totalPrice);
  });
  return (
    <>
      <div className="row">
        <div className="col-md-11 col-11 mx-auto  pt-4 ">
          <div className="row">
            <div className="col-11 col-md-8">
              <LeftSide
                quatity1={quatity1}
                quatity2={quatity2}
                itemPrice1={itemPrice1}
                itemPrice2={itemPrice2}
                totalPrice
                handleQuatityInc1={handleQuatityInc1}
                handleQuatityDec1={handleQuatityDec1}
                handleQuatityInc2={handleQuatityInc2}
                handleQuatityDec2={handleQuatityDec2}
              />
            </div>
            <div className="col-11 col-md-4">
              <RightSide totalPrice={totalPrice} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
