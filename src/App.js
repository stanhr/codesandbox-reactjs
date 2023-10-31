import { useState } from "react"; // from imported from react library
import "./styles.css";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [counter, setCounter] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    setAdvice(data.slip.advice);

    setCounter((c) => c + 1);

  }

  return (
    <div>
      <h1>{advice}</h1>
      <p>You have read <strong>{counter}</strong> pieces of advice</p>
      <button onClick={getAdvice}>Get advice</button>
    </div>
  );
}

// comment