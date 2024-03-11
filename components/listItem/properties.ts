import { MouseEvent } from "react";

interface IListItemProps {
  items: string[];
  removeItem: (event: MouseEvent<HTMLButtonElement>) => void;
}
export default IListItemProps;
