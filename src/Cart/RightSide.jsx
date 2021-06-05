import React, { useState } from "react";
import { Button } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Collapse } from "react-bootstrap";
function RightSide({ totalPrice }) {
  const [open, setOpen] = useState(false);
  const [shipCharge, setShipCharge] = useState(50);
  const [totalPriceWithShip, setTotalPriceWithShip] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const handleTotalPrice = () => {
    setTotalPriceWithShip(shipCharge + totalPrice);
  };
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputVarify = () => {
    if (inputValue === "preet") {
      setTotalPriceWithShip(totalPriceWithShip - 15);
    } else {
      alert("code is not match with discount code");
    }
  };

  return (
    <>
      <div class="card shadow p-2">
        <h2>The Total Amount Of</h2>
        <div className="d-flex flex-direction-column justify-content-between pt-3">
          <p>Product amount</p>
          <p>${totalPrice}</p>
        </div>
        <div className="d-flex flex-direction-column justify-content-between">
          <p>Shipping Charge</p>
          <p>{shipCharge}</p>
        </div>
        <hr />
        <div className="d-flex flex-direction-column justify-content-between">
          <h6>The total Amount of (including GST)</h6>
          <h6>${totalPriceWithShip}</h6>
        </div>
        <Button
          variant="contained"
          color="primary"
          className="w-25 h-20"
          onClick={handleTotalPrice}
        >
          CHECKOUT
        </Button>
      </div>

      <div className="card shadow p-2 mt-3">
        <div className="card-body ">
          <a
            className="d-flex justify-content-between"
            data-toggle="collapse"
            href="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
            onClick={() => setOpen(!open)}
          >
            <h6>Add a discount code(optional)</h6>
            <span>
              <KeyboardArrowDownIcon />
            </span>
          </a>
        </div>
        <Collapse in={open}>
          <div className="collapse" id="collapseExample">
            <input
              type="text"
              name=""
              id="idscount_code1"
              className="form-control font-weight-bold"
              placeholder="Enter the discount code"
              onChange={handleInput}
            />
            <small id="error_trw" className="text-dark pt-3">
              code is preet
            </small>
            <div>
              <Button
                className="w-25 h-20 mt-3"
                variant="contained"
                color="primary"
                onClick={handleInputVarify}
              >
                Apply
              </Button>
            </div>
          </div>
        </Collapse>
      </div>
      <div className="card shadow mt-3">
        <div className="card-body">
          <h5>Expected Delivery Date</h5>
          <p>July 27th 2021-July 29th 2021</p>
        </div>
      </div>
    </>
  );
}

export default RightSide;
