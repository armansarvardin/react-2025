import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import { use, useState } from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreContept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {

  const [contentState, setContentState] = useState("components");

  function handleSelect(selectedButton) {
    console.log(selectedButton);
    setContentState(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts"> 
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>
              JSX
            </TabButton>
            <TabButton onSelect={() => handleSelect('props')}>
              Props
            </TabButton>
            <TabButton onSelect={() => handleSelect('state')}>
              State
            </TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[contentState].title}</h3>
            <p>{EXAMPLES[contentState].description}</p>
            <pre>
              <code>{EXAMPLES[contentState].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
