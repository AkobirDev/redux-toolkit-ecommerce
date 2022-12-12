import React from "react";
import { useDispatch } from "react-redux";
import { ListGroup } from "reactstrap";
import {
  addItem,
  deleteItem,
  removeItem,
} from "../../../store/shopping-cart/cartSlice";
import "../../../styles/cartItem.css";
const CartItem = ({ item }) => {
  const { id, title, price, image01, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(
      addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };
  const decrement = () => {
    dispatch(removeItem(id));
  };
  const deleteAll = () => {
    dispatch(deleteItem(id));
  };
  return (
    <ListGroup className="border-0 cart__list">
      <div className="cart__item-info d-flex gap-2">
        <img src={image01} alt="" />
        <div className="cart__product-info d-flex align-items-center justify-content-between w-100 gap-4">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <p className="d-flex align-items-center gap-5 cart__product-price">
              {quantity}x <span>${totalPrice}</span>
            </p>
            <div className="d-flex align-items-center gap-3 increase__decrease-btn">
              <span className="increase__btn" onClick={increment}>
                <i className="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease__btn" onClick={decrement}>
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>
          <span className="delete__btn" onClick={deleteAll}>
            <i className="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroup>
  );
};

export default CartItem;
