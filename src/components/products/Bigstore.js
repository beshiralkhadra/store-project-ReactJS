import React, { useState } from "react";
import "./products.css";

function Bigstore({
  productQty,
  productName,
  price,
  src,
  alt,
  deletingProducts,
  id,
}) {
  const [edited, setEdited] = useState(true);
  const [save, setSave] = useState(true);
  const [displayingCounter, setDisplayingCounter] = useState(productQty);

  return (
    <div className="big-store">
      <img src={src} alt={alt} />
      <div className="qty-price-btns">
        Name:{productName}
        <p className="qty-style">
          {" "}
          Qty:
          {!edited ? (
            <button
              className="plus-btn"
              onClick={() => {
                setDisplayingCounter(displayingCounter + 1);
              }}
            >
              +
            </button>
          ) : null}
          {displayingCounter}
          {!edited ? (
            <button
              className="sub-btn"
              onClick={() => {
                setDisplayingCounter(displayingCounter - 1);
              }}
            >
              -
            </button>
          ) : null}
        </p>
        Price:{price}
      </div>

      <button className="trash-btn" onClick={() => deletingProducts(id)}>
        <i className="fa-regular fa-trash-can"></i>
      </button>
      <div className="edit-save-btns">
        {" "}
        <button
          className="edit-btn"
          onClick={() => {
            setEdited(false);
            setSave(true);
          }}
        >
          Edit
        </button>
        <button
          className="save-btn"
          onClick={() => {
            setSave(false);
            setEdited(true);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Bigstore;
