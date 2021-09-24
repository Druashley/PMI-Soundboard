import "./App.css";
import TitleSection from "./components/TitleSection";
import FooterSection from "./components/FooterSection";
import StoogeBadge from "./components/StoogeBadge";
import { useState } from "react";
import Button from "./components/Button";

import soundList, { socialList } from "./data";

function App() {
  const [stooge, setStooge] = useState("");

  return (
    <div className="App">
      <div className="flex flex-col h-screen">
        <TitleSection />
        <div className="w-80 sm:ml-36 mb-4 mx-auto">
          {socialList(stooge).map((badge) => (
            <StoogeBadge
              picture={badge.picture}
              name={badge.name}
              handle={badge.handle}
              link={badge.link}
              key={badge.name}
            />
          ))}
        </div>
        <div className="md:container md:mx-auto">
          <label
            className="text-gray-700 italic font-bold ml-4 "
            htmlFor="persons"
          >
            Pick A Stooge To Get Started
            <select
              id="persons"
              className=" ml-4 block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-700"
              name="persons"
              onChange={(e) => {
                setStooge(e.target.value);
              }}
            >
              <option value="">Stooge</option>
              <option value="hawk">AJ Hawk</option>
              <option value="connor">Connor</option>
              <option value="gump">Gump</option>
              <option value="mett">Mett</option>
              <option value="pat">Pat</option>
              <option value="ty">Ty</option>
              <option value="zito">Zito</option>
            </select>
          </label>
        </div>

        <div className="md:container md:mx-auto flex-grow">
          {soundList(stooge).map((sound) => (
            <Button title={sound.title} sound={sound.clip} key={sound.clip} />
          ))}
        </div>
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
