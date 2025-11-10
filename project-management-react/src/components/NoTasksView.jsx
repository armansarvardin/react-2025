import noProjectsImage from "../assets/no-projects.png";

export default function TasksList({onCreateProject, ...props}) {
  return <div className="flex flex-col w-full mx-8 min-h-screen text-center justify-center items-center">
    <img src={noProjectsImage} alt="no projects image" className="size-16"/>
    <h3 className="text-lg font-semibold text-stone-700 my-4">No project selected</h3>
    <p className="text-stone-600 mb-4">Select a project or get started with a new one</p>
    <button 
      onClick={onCreateProject} 
      className="text-center px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
      >Create a new project
    </button>
  </div>
} 