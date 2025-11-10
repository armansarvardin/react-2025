
export default function Sidebar({projects, selectedProject, onCreateProject, onSelectProject}) {

  function handleSelectProject(project) {
    if (project) {
      if (onSelectProject) {
        onSelectProject(project);
      }
    }
  }

  return <div className="w-2/5 min-h-screen pt-8 pl-8 bg-black gap-8 mt-8 rounded-tr-3xl px-4">
    <h1 className="text-white font-semibold mb-6 text-md uppercase mr-4">Your projects</h1>
    <button
     onClick={onCreateProject} 
     className="text-xs mb-8 bg-stone-700 text-stone-400 px-4 py-2 rounded-md md:text-base hover:bg-stone-600 hover:text-stone-100">
      + Add Project
    </button>
    <ul>
      {projects.map((project) => {
          if (!project) {
            return null
          }
          const isSelected = selectedProject && selectedProject.id === project.id
          let className = "w-full rounded-sm p-2 text-left "
          if (isSelected) {
            className += " text-stone-100 bg-stone-800"
          } else {
            className += " text-stone-400 hover:text-stone-200 hover:bg-stone-900"
          }
          return <li
            key={project.id}
            className="text-left items-start"
            >
              <button
                className={className}
                onClick={() => handleSelectProject(project)}
              >
                {project.title}
              </button>
          </li>
        })
      }
    </ul>
  </div>
}