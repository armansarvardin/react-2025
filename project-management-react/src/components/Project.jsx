export default function Project({project, onDelete}) {

  function handleDelete(project) {
    onDelete(project)
  }

  return <div className="w-full mx-8 my-16">
    <div className="flex flex-row w-full items-baseline mb-2">
      <h1 className="font-bold text-3xl w-full">{project.title}</h1>
      <button onClick={() => handleDelete(project)}>Delete</button>
    </div>
    <div>
      <p className="text-gray-500 mb-2">Dec 29, 2024</p>
      <p className="mb-4">{project.description}</p>
    </div>
    <hr className="my-4" />
    <div>
      <h2 className="font-bold text-2xl mb-4">Tasks</h2>
      <div className="flex flex-row gap-4 mb-4">
        <input className="bg-stone-300" />
        <button>Add Task</button>
      </div>
      <p>This project does not have any tasks yet.</p>
    </div>
  </div>
}