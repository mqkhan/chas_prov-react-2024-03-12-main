import { useState } from "react";

export default function List({ hobbys, setHobbys }) {
  function handleRemoveHobby(id) {
    const filteredHobby = hobbys.filter((hobby) => hobby.id !== id);
    setHobbys(filteredHobby);
  }
  return (
    <>
      <ul className="list-none">
        {hobbys.map((hobby) => (
          <li key={hobby.id}>
            {hobby.title}{" "}
            <button onClick={() => handleRemoveHobby(hobby.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
