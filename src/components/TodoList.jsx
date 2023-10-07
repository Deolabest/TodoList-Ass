import React, { useState } from "react";
import { useDate } from "./useDate.jsx";

function TodoList() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const { date, addDays, addMonths } = useDate(new Date());

  function addItem() {
    if (!newItem) {
      alert("Enter an item.");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 10000),
      value: newItem
    };
    setItems((oldList) => [...oldList, item]);

    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="inside">
      <input
        type="text"
        placeholder="Add an Item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Add</button>

      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}
              <button onClick={() => deleteItem(item.id)}>X</button>
            </li>
          );
        })}
      </ul>

      <div>
        <p>Date: {date.toDateString()}</p>
        <button onClick={() => addDays(1)}>Add 1 Day</button>
        <button onClick={() => addMonths(1)}>Add 1 Month</button>
      </div>
    </div>
  );
}

export default TodoList;
