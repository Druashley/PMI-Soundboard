import "./App.css";
import TitleSection from "./components/TitleSection";
import { useState } from "react";
import Button from "./components/Button";

import soundList from "./data";

function App() {
  const [stooge, setStooge] = useState("");

  return (
    <div className="App">
      <TitleSection />
      <div className="md:container md:mx-auto">
        <label
          className="text-gray-700 italic font-bold ml-4 "
          htmlFor="persons"
        >
          Stooge
          <select
            id="persons"
            className=" ml-4 block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-700"
            name="persons"
            onChange={(e) => {
              const selectedStooge = e.target.value;
              setStooge(selectedStooge);
            }}
          >
            <option value="">Pick a stooge</option>
            <option value="connor">Connor</option>
            <option value="hawk">AJ Hawk</option>
            <option value="gump">Gump</option>
            <option value="pat">Pat</option>
            <option value="ty">Ty</option>
            <option value="zito">Zito</option>
          </select>
        </label>
      </div>
      <div className="md:container md:mx-auto flex-auto">
        {soundList(stooge).map((sound) => (
          <Button title={sound.title} sound={sound.clip} key={sound.clip} />
        ))}
      </div>
    </div>
  );
}

export default App;
