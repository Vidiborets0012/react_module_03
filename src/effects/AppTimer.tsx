import { useState } from "react";
import Timer from "./Timer";

export default function AppTimer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide timer" : "Show timer"}
      </button>
      {isOpen && <Timer />}
    </>
  );
}
