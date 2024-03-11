import { FunctionComponent, ChangeEvent, KeyboardEvent, useState } from "react";
import IListInputProps from "./properties";

const ItemInput: FunctionComponent<IListInputProps> = ({
  error,
  value,
  onChange,
  onAdd,
}) => {
  return (
    <div className="grid grid-flow-col gap-4">
      <input
        className={`border-2 placeholder-secondary bg-primary rounded-lg p-2 ${
          error ? "border-error" : "border-secondary"
        }`}
        type="text"
        placeholder="Neues Item"
        value={value}
        onChange={onChange}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onAdd();
          }
        }}
      />
      <button
        className={`border-2 placeholder-secondary bg-primary rounded-lg p-2 w-11 ${
          error ? "border-error" : "border-secondary"
        }`}
        onClick={onAdd}
      >
        +
      </button>
    </div>
  );
};

export default ItemInput;
