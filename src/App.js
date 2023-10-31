import { useState, useEffect } from "react"; // imported from react library
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
  
  useEffect(function(){
    getAdvice();
  }, []);


  return (
    <div>
      <h1>{advice}</h1>
      <Message counter={counter} />
      <button onClick={getAdvice}>Get advice</button>
    </div>
  );
}


function Message (props) {
  return (
    <p>You have read <strong>{props.counter}</strong> pieces of advice</p>
  );
}