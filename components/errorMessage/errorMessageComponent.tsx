import { FunctionComponent } from "react";
import IErrorMessageProps from "./properties";

const ErrorMessage: FunctionComponent<IErrorMessageProps> = ({ isInvalid }) => {
  if (!isInvalid) return null;

  return (
    <div>
      <div className="text-error text-center text-sm font-bold">
        <div>
          <p>Item already exists.</p>
        </div>
      </div>
    </div>
  );
};
export default ErrorMessage;
