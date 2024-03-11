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

  // Function to handle remove item
  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Shopping List</h1>
      <div className="bg-accent h-2 w-full rounded-lg"></div>
      <ListInput items={items} />
      <ErrorMessage />
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
