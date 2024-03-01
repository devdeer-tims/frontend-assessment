import { FunctionComponent, ChangeEvent, KeyboardEvent, useState } from "react";
import IListInputProps from "./properties";

const ListInput: FunctionComponent<IListInputProps> = ({
  addItem,
  isInvalid,
}) => {
  // State for the input value
  const [input, setInput] = useState("");
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

  return (
    <div className="grid grid-flow-col gap-4">
      <input
        className={`border-2 border-secondary placeholder-secondary bg-primary rounded-lg p-2 ${
          isInvalid && "border-error"
        }`}
        type="text"
        placeholder="Neues Item"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleEnter}
      />
      <button
        className={`border-2 border-secondary placeholder-secondary bg-primary rounded-lg p-2 w-11 ${
          isInvalid && "border-error"
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
