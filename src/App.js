import "./App.css";
import JSONDATA from "./MOCK_DATA.json";

import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />

      {/* filltering through the data */}
      {JSONDATA.filter((val) => {
        if (searchTerm == "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchTerm.toLowerCase()) // checking if any names match the search if so displaying those names
        ) {
          return val;
        }
        // mapping through the mock data and presenting it on the website
      }).map((val, key) => {
        return (
          <div>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
