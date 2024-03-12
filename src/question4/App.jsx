// Context API för Temahantering (3p)
// Använd Context API för att skapa ett enkelt tema-byte-system.
// Skapa en ThemeContext som innehåller aktuellt tema (t.ex. "light" eller "dark").
// Använd en Provider från ThemeContext i App-komponenten nedanför.
// Skapa två barn-komponenter som använder temat.
// Skapa en tredje barn-komponent som innehåller en knapp som kan växla tema.
// Providern i App-komponenten ska omsluta de tre barn-komponenterna.

import React, { createContext, useState, useContext } from "react";
import { useTheme } from "./ThemeContext";
import { ThemeProvider } from "./ThemeContext";

///////

function Component1() {
  const { theme } = useTheme();

  return <div className={`${theme}`}>Component 1</div>;
}

//////////////////

function Component2() {
  const { theme } = useTheme();

  return (
    <div
      className={`bg-${theme === "light" ? "white" : "black"} text-${
        theme === "light" ? "black" : "white"
      } p-4`}
    >
      Component 2
    </div>
  );
}

////////////////

function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="bg-blue-500 text-white p-2 ">
      Toggle Theme
    </button>
  );
}

function App1() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Component1 />
      <Component2 />
      <ThemeToggle />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <App1 />
    </ThemeProvider>
  );
}

export default App;
