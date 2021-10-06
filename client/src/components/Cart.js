import CartItemContainer from "./CartItemContainer";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/user_items", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((items) => setItems(items));
  }, []);

  function handleDelete(id) {
    let userItemId = items.find((item) => item.item.id === id).id;
    fetch(`/user_items/${userItemId}`, {
      method: "DELETE",
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        const updatedItems = items.filter((item) => item.item.id !== id);
        setItems(updatedItems);
      }
    });
  }

  return (
    <>
      <div className="main">
        <CartItemContainer items={items} handleDelete={handleDelete} />
      </div>
      <div className="cart">
        <Button variant="outlined" id="remove-btn">
          Checkout
        </Button>
      </div>
    </>
  );
}

export default Cart;
