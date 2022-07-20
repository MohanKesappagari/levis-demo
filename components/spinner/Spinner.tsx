import { DotLoader } from "react-spinners";
import "./spinner.css";
export default function Spinner() {
  return (
    <div className="spinner">
      <DotLoader color="#c41230" />
    </div>
  );
}
