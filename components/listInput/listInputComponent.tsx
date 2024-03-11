import { FunctionComponent, ChangeEvent, KeyboardEvent, useState } from "react";
import IListInputProps from "./properties";

const ListInput: FunctionComponent<IListInputProps> = ({
  items,
}) => {
  // State for the input value
  const [input, setInput] = useState("");
  // State for the invalid input
  const [invalidInput, setInvalidInput] = useState(false);
  // Function to handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  // Method to submit item with enter key
  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input) {
      addItem(input);
      setInput("");
    }
  };
  // Function to check if input is valid
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
      items = [...items, item];
      setInvalidInput(false);
    }
  };

  return (
    <div className="grid grid-flow-col gap-4">
      <input
        className={`border-2 border-secondary placeholder-secondary bg-primary rounded-lg p-2 ${
          invalidInput && "border-error"
        }`}
        type="text"
        placeholder="Neues Item"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleEnter}
      />
      <button
        className={`border-2 border-secondary placeholder-secondary bg-primary rounded-lg p-2 w-11 ${
          invalidInput && "border-error"
        }`}
        onClick={() => {
          addItem(input);
          setInput("");
        }}
      >
        +
      </button>
    </div>
  );
};
export default ListInput;
