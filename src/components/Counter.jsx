import React from "react";
import { useRef, useEffect } from "react";

function Counter() {
  const counterRef = useRef(0);
  const inputElemRef = useRef();

  useEffect(() => {
    counterRef.current = counterRef.current + 1;
    inputElemRef.current.focus();
  },[]);
  return (
    <div>
      <p>Hello counter : {counterRef.current}</p>
      <input type="text" placeholder="search" ref={inputElemRef} />
      <button>click me!</button>
    </div>
  );
}

export default Counter;
