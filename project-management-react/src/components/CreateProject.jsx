import React, { useRef } from "react";
import DateInput from "./DateInput";
import TextInput from "./TextInput";

export default function CreateProject({onSaveProject, onCancel}) {

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();
  
  function handleSaveProject(e) {
    e.preventDefault();

    const titleText = titleRef.current.value;
    const descriptionText = descriptionRef.current.value;
    const dateText = dateRef.current.value;

    const createdProject = {
      id: crypto.randomUUID(),
      title: titleText,
      description: descriptionText,
      date: dateText
    }

    onSaveProject(createdProject)
  }

  return <div className="mx-8 w-full">
    <form id="create-project" onSubmit={handleSaveProject}>
      <div className="w-full text-right my-8">
        <button onClick={onCancel} type="button" className="px-6 py-2">Cancel</button>
        <button type="submit" className="px-6 py-2 bg-black rounded-lg text-white">Save</button>
      </div>
      <section>
        <TextInput ref={titleRef} title="Title" />
        <TextInput ref={descriptionRef} isLong title="Description"/>
        <DateInput ref={dateRef} title="Due Date"/>
      </section>
    </form>
  </div>
}