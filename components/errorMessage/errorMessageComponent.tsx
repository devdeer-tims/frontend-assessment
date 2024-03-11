import { FunctionComponent } from "react";
import IErrorMessageProps from "./properties";

const ErrorMessage: FunctionComponent<IErrorMessageProps> = ({ error }) => {
  if (!error) return null;

  return (
    <div>
      <p className="text-error text-center text-sm font-bold">
        Item already exists.
      </p>
    </div>
  );
};

export default ErrorMessage;
