import { FunctionComponent, ReactElement } from "react";
import IListItemProps from "./properties";

const ItemList: FunctionComponent<IListItemProps> = ({ items, removeItem }) => {
  return (
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
  );
};

export default ItemList;
