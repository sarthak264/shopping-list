import React, { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [items, setItems] = useState([
    { itemName: "item 1", quantity: 1, isSelected: false },
    { itemName: "item 2", quantity: 3, isSelected: true },
    { itemName: "item 3", quantity: 2, isSelected: false },
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleAddButtonClick = () => {
    if (inputValue === "") {
      return;
    }
    const newItem = {
      itemName: inputValue,
      quantity: 1,
      isSelected: false,
    };

    const newItems = [...items, newItem];

    setItems(newItems);
    setInputValue("");
  };

  const handleQuantityIncrease = (index) => {
    const newItems = [...items];

    newItems[index].quantity++;

    setItems(newItems);
  };

  const handleQuantityDecrease = (index) => {
    const newItems = [...items];

    if (newItems[index].quantity === 0) {
      return;
    } else {
      newItems[index].quantity--;
    }

    setItems(newItems);
  };

  const toggleComplete = (index) => {
    const newItems = [...items];

    newItems[index].isSelected = !newItems[index].isSelected;

    setItems(newItems);
  };

  const deleteItem = (index) => {
    let newItems = [...items];

    const removed = newItems.splice(index, 1);

    setItems(newItems);
  };

  return (
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="add-item-input"
            placeholder="Add an item..."
          />
          <FontAwesomeIcon
            icon={faPlus}
            onClick={() => handleAddButtonClick()}
          />
        </div>
        <div className="item-list">
          {items.map((item, index) => (
            <div className="item-container" key={index}>
              <div className="item-name" onClick={() => toggleComplete(index)}>
                {item.isSelected ? (
                  <>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span className="completed">{item.itemName}</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCircle} />
                    <span>{item.itemName}</span>
                  </>
                )}
              </div>
              <div className="corner">
                <div className="quantity">
                  <button>
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      onClick={() => handleQuantityDecrease(index)}
                    />
                  </button>
                  <span> {item.quantity} </span>
                  <button>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      onClick={() => handleQuantityIncrease(index)}
                    />
                  </button>
                </div>
                <div className="dlt_btn">
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    onClick={() => deleteItem(index)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
