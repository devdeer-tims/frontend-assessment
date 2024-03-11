"use client";
import ListItem from "../listItem";
import ListInput from "../listInput";
import ErrorMessage from "../errorMessage";
import { ChangeEvent, useState } from "react";
/**
 * Renders a shopping list component.
 */
function ShoppingList() {
  const [items, setItems] = useState([] as string[]);
  const [input, setInput] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setInvalidInput(false);
  };

  const isValidInput = () => {
    if (items.some((item) => item.toLowerCase() === input.toLowerCase())) {
      setInvalidInput(true);
      setInput("");
      return true;
    }
    return false;
  };

  const addItem = () => {
    if (input && !isValidInput()) {
      setItems([...items, input]);
      setInput("");
      setInvalidInput(false);
    }
  };

  const removeItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    const index = Number(e.currentTarget.value);
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Shopping List</h1>
      <div className="bg-accent h-2 w-full rounded-lg"></div>
      <ListItem items={items} removeItem={removeItem} />
      <ListInput
        value={input}
        onChange={handleInputChange}
        onAdd={addItem}
        error={invalidInput}
      />
      <ErrorMessage error={invalidInput} />
    </div>
  );
}

export default ShoppingList;
