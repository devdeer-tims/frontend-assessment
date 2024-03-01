"use client";
import ListItem from "@/components/listItem/listItemComponent";
import ListInput from "../listInput";
import ErrorMessage from "../errorMessage";
import { useState } from "react";
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

  // Function to doubles
  const isValidInput = () => {
    if (items.some((item) => item.toLowerCase() === input.toLowerCase())) {
      setInvalidInput(true);
      setInput("");
      return false;
    }
    return true;
  };

  // Function to handle add item
  const addItem = (item: string) => {
    if (item && isValidInput()) {
      setItems([...items, item]);
      setInvalidInput(false);
    }
  };

  // Function to handle remove item
  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Shopping List</h1>
      <div className="bg-accent h-2 w-full rounded-lg"></div>
      <ListInput addItem={addItem} isInvalid={invalidInput} />
      <ErrorMessage isInvalid={invalidInput} />
      <ul className={`${items.length === 0 && "hidden"}`}>
        {items.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            removeItem={() => removeItem(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
