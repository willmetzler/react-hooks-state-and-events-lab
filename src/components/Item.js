import React, {useState} from "react";



function Item({ name, category }) {
  const [inCart, setInCart] = useState(true)
  let classForCart = inCart ? "" : "in-cart"
  let cartButtonText = inCart ? "Add to Cart" : "Remove From Cart"
  let buttonColor = inCart ? "yellow" : "magenta"

  function AddToCart () {
    
  
    function handleClick() {
      setInCart((inCart) => !inCart);
    }
    return (
      <button style={{ background: buttonColor }} onClick={handleClick} className="add">{cartButtonText}</button>
    )
  }
  
  return (
    <li className={classForCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <AddToCart />
    </li>
  );
}

export default Item;
