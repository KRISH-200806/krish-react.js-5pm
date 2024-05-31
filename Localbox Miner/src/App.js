import "./App.css";
import Midsection from "./component/Midsection";
import { useContext } from "react";
import { Themecontex } from "./contex/Themecontex";

function App() {
  const { theme, Togglethem } = useContext(Themecontex);

  return (
    <div>
      <div
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
        }}
      >
        <button onClick={Togglethem} className="dark-mode">
          {theme === "light" ? (
            <i className="bi bi-moon-fill"></i>
          ) : (
            <i className="bi bi-sun-fill" style={{ color: "white" }}></i>
          )}
        </button>
        <Midsection />
      </div>
    </div>
  );
}

export default App;
