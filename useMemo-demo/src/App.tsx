import { useMemo, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);

  const expensiveFunction = (n: number) => {
    console.count("Function re-rendered!:");
    let total = 0;
    for (let i = 1; i < n; i++) {
      total += 1;
    }
    return total;
  };

  const sum = useMemo(() => expensiveFunction(number), [number]);

  console.count("Component re-rendered!:");

  return (
    <div>
      <input
        placeholder="enter a text"
        onChange={(event) => setText(event.target.value)}
      />
      <input
        value={number}
        type="number"
        onChange={(event) => setNumber(Number(event.target.value))}
      />
      <span>Total: {sum}</span>
    </div>
  );
}

export default App;
