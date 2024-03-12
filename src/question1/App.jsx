// 1. Lista med useState (3p)
// Skapa en komponent som visar en lista med hobbies.
// Användaren ska kunna lägga till en ny hobby via ett
// inputfält och en "Lägg till"-knapp. Varje hobby i listan
// ska ha en "Ta bort"-knapp som tar bort hobbyn från listan.
// Använd useState för att hantera listan.

import { useState } from "react";
import List from "./HobbyList";

let nextId = 0;

function App() {
  const [hobbyLists, setHobbyLists] = useState([]);
  const [title, setTitle] = useState("");

  function handelAddHobby() {
    setHobbyLists([
      ...hobbyLists,
      {
        id: nextId++,
        title: title,
      },
    ]);
    setTitle("");
  }

  return (
    <>
      <div className="container">
        <div className="list">
          <h1>Hobby List</h1>
          <input
            placeholder="Add hobby list"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />{" "}
          <button onClick={handelAddHobby}>Add</button>
          <List hobbys={hobbyLists} setHobbys={setHobbyLists} />
        </div>
      </div>
    </>
  );
}

export default App;
