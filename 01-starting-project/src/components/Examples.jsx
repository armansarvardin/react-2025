import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";


export default function Examples() {
  const [contentState, setContentState] = useState("components");

  function handleSelect(selectedButton) {
    console.log(selectedButton);
    setContentState(selectedButton);
  }

  let tabContent = <p>Please select a topic</p>

  if (contentState) {
    tabContent = (<div id="tab-content">
      <h3>{EXAMPLES[contentState].title}</h3>
      <p>{EXAMPLES[contentState].description}</p>
      <pre>
        <code>{EXAMPLES[contentState].code}</code>
      </pre>
    </div>)
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs buttons={
        (<>
          <TabButton isSelected={contentState === "components"} onClick={() => handleSelect('components')}>
            Components
          </TabButton>
          <TabButton isSelected={contentState === "jsx"} onClick={() => handleSelect('jsx')}>
            JSX
          </TabButton>
          <TabButton isSelected={contentState === "props"} onClick={() => handleSelect('props')}>
            Props
          </TabButton>
          <TabButton isSelected={contentState === "state"} onClick={() => handleSelect('state')}>
            State
          </TabButton>
        </>)
      }>
        {tabContent}
      </Tabs>
    </Section>
  );
}