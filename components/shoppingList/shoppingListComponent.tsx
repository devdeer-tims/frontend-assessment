"use client";
import { ChangeEvent, KeyboardEvent, MouseEvent, useState } from "react";

/**
 * Renders a shopping list component.
 */
function ShoppingList() {
  // State for the list of items
  const [items, setItems] = useState([] as string[]);
  // State for the input value
  const [input, setInput] = useState("");
  // State for the invalid input
  const [invalidInput, setInvalidInput] = useState(false);

  // Function to handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setInvalidInput(false);
  };

  // Function to doubles
  const isValidInput = () => {
    if (items.some((item) => item.toLowerCase() === input.toLowerCase())) {
      setInvalidInput(true);
      setInput("");
      return true;
    }
    return false;
  };

  // Function to handle add item
  const addItem = () => {
    if (input && !isValidInput()) {
      setItems([...items, input]);
      setInput("");
      setInvalidInput(false);
    }
  };

  const removeItem = (e: MouseEvent<HTMLButtonElement>) => {
    const index = Number(e.currentTarget.value);
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  // Method to submit item with enter key
  const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (!isValidInput() && input) {
        setItems([...items, input]);
        setInput("");
        setInvalidInput(false);
      }
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Shopping List</h1>
      <div className="bg-accent h-2 w-full rounded-lg"></div>
      <ul className={`${items.length === 0 && "hidden"}`}>
        {items.map((item, index) => (
          <li
            className={`grid grid-flow-col gap-4 ${
              item === items[items.length - 1] ? "pb-0" : "pb-4"
            }`}
            key={index}
          >
            <input
              className="border-2 border-secondary bg-secondary text-white rounded-lg p-2"
              disabled
              type="text"
              value={item}
            />
            <button
              className="border-2 border-secondary text-white bg-secondary rounded-lg p-2 w-11"
              value={index}
              onClick={removeItem}
            >
              -
            </button>
          </li>
        ))}
      </ul>
      <div className="grid grid-flow-col gap-4">
        <input
          className={`border-2 placeholder-secondary bg-primary rounded-lg p-2 ${
            invalidInput ? "border-error" : "border-secondary"
          }`}
          type="text"
          placeholder="Neues Item"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleEnter}
        />
        <button
          className={`border-2 placeholder-secondary bg-primary rounded-lg p-2 w-11 ${
            invalidInput ? "border-error" : "border-secondary"
          }`}
          onClick={addItem}
        >
          +
        </button>
      </div>
      <div>
        {invalidInput && (
          <div className="text-error text-center text-sm font-bold">
            <div>
              <p>Item already exists.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppingList;
