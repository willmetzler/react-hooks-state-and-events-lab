import React, {useState} from "react";
import Item from "./Item";
import items from "../data/items";

function ShoppingList({ items }) {

const [selectedCategory, setSelectedCategory] = useState(items)

function handleChange(event) {
  const newItemList = items.filter((item) => item.category === event.target.value);
  setSelectedCategory(newItemList);

}

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={event => handleChange(event)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
