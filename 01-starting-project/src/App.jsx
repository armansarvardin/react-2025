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
    <>
      <Header />
      <main>
        <section id="core-concepts"> 
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map( (conceptItem) => 
                <CoreConcept key={conceptItem.title} {...conceptItem}/>
            )}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={contentState === "components"} onSelect={() => handleSelect('components')}>
              Components
            </TabButton>
            <TabButton isSelected={contentState === "jsx"} onSelect={() => handleSelect('jsx')}>
              JSX
            </TabButton>
            <TabButton isSelected={contentState === "props"} onSelect={() => handleSelect('props')}>
              Props
            </TabButton>
            <TabButton isSelected={contentState === "state"} onSelect={() => handleSelect('state')}>
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
    </>
  );
}

export default App;
