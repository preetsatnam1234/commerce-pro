import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";

function Card(props) {
  return (
    <div>
      <div className="card shadow">
        <div className="row">
          <div className="col-11 col-md-10  ">
            <h2 className="p-3">{props.cart_items}</h2>
            <div className="row">
              <div className="col-11 col-md-5 ">
                <img
                  className="first-image"
                  src={props.img}
                  alt="this is a image"
                />
              </div>
              <div className="col-11 col-md-7">
                <div className="row">
                  <div className="col-sm-6">
                    <h4>Blue Zara Shirt</h4>
                    <p>Shirt - Blue</p>
                    <p>COLOR: BLUE</p>
                    <p>SIZE: M</p>
                  </div>
                  <div className="col-sm-6 ">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination ">
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="#"
                            onClick={props.handleQuatityDec}
                          >
                            <RemoveIcon />
                          </a>
                        </li>
                        <li className="page-item">
                          {" "}
                          <p className="page-link" href="#">
                            {props.quatity}
                          </p>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="#"
                            onClick={props.handleQuatityInc}
                          >
                            <AddIcon />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="d-flex flex-direction-column justify-content-between">
                  <p>
                    <DeleteIcon />
                    REMOVE LIST
                  </p>
                  <p>
                    <FavoriteIcon className="heart" />
                    MOVE TO WISH LIST
                  </p>
                  <h6>${props.price}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
