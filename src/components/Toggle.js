import React from "react";
import { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => setIsOn(!isOn);

  return <button onClick={handleClick}>{isOn ? "OFF" : "ON"}</button>;
}

export default Toggle;
