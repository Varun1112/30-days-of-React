import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [warningText, setWarning] = useState("");

  function increaseCount() {
    setCount((prev) => {
      const next = Math.min(prev + 1, 10);
      if (next === 10) {
        setWarning("You have reached 10...maxed out");
      } else {
        setWarning("");
      }
      return next;
    });
  }

  function decreaseCount() {
    setCount((prev) => {
      const next = Math.max(prev - 1, 0);
      if (next === 0 && prev === 1) {
        setWarning("You have reached 0...min out");
      } else {
        setWarning("");
      }
      return next;
    });
  }

  function reset() {
    setCount(() => {
      setWarning("");
      return 0;
    });
  }

  return (
    <>
      <button onClick={increaseCount} disabled={count === 10}>
        Increase+
      </button>
      <div>{count}</div>
      <button onClick={decreaseCount} disabled={count === 0}>
        Decrease-
      </button>
      <button onClick={reset}>reset</button>
      {warningText}
    </>
  );
}
