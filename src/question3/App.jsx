// 3. Custom Hook för counter (3p)
// Skapa en custom hook, useCounter, som hanterar en räknare.
// Denna hook ska tillhandahålla två funktioner: en för att öka
// räknarens värde och en för att minska den. Skriv kod i App-komponenten
// nedanför som använder din custom hook och visar räknarens värde
// samt två knappar för att öka och minska värdet.
import React from "react";
import { useState } from "react";

function App() {
  function useCounter() {
    const [count, setCount] = useState(0);

    function AddValue() {
      setCount(count + 1);
    }

    function RemoveValue() {
      setCount(count - 1);
    }

    return {
      count,
      AddValue,
      RemoveValue,
    };
  }

  const { count, AddValue, RemoveValue } = useCounter();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={AddValue}>Add</button>
      <button onClick={RemoveValue}>remove</button>
    </div>
  );
}

export default App;
