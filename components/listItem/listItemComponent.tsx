import { FunctionComponent } from "react";
import IListItemProps from "./properties";

const ListItem: FunctionComponent<IListItemProps> = ({ item, removeItem }) => {
  return (
    <li className="grid grid-flow-col gap-4 pb-4">
      <input
        className="border-2 border-secondary bg-secondary text-white rounded-lg p-2"
        disabled
        type="text"
        value={item}
      />
      <button
        className="border-2 border-secondary text-white bg-secondary rounded-lg p-2 w-11"
        onClick={() => removeItem()}
      >
        -
      </button>
    </li>
  );
};
export default ListItem;
