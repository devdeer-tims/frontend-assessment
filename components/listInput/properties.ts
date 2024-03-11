import { ChangeEvent } from "react";

interface IListInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
  error: boolean;
}
export default IListInputProps;
