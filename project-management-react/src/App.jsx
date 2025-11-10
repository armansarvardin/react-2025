import Sidebar from "./components/Sidebar";
import TasksList from "./components/NoTasksView";
import { useState } from "react";
import CreateProject from "./components/CreateProject";
import Project from "./components/Project";

function App() {

  const [isCreatingProject, setCreatingProject] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState();

  function handleCreateProject() {
    setSelectedProject(null)
    setCreatingProject(true);
  }

  function handleSaveProject(project) {
    console.log(project);
    console.log(projects)
    setProjects((prevProjects) => {
      return [...prevProjects, project];
    });
    setCreatingProject(false);
  }

  function handleCancelCreatingProject() {
    setCreatingProject(false);
  }

  function handleSelectProject(project) {
    if (project) {
      setCreatingProject(false);
      setSelectedProject(project);
    }
  }

  function handleDelete(project) {
    setSelectedProject(null);
    setProjects(prevProjects => prevProjects.filter(p => p.id !== project.id));
  }

  return (
    <div className="flex min-h-screen gap-x-4">
      <Sidebar
        projects={projects}
        selectedProject={selectedProject}
        onCreateProject={handleCreateProject}
        onSelectProject={handleSelectProject}
      />
      {selectedProject == null ? (
        <>
          {isCreatingProject && <CreateProject
            onCancel={handleCancelCreatingProject}
            onSaveProject={handleSaveProject} />}
          {!isCreatingProject && <TasksList
            onCreateProject={handleCreateProject} />}
        </>
      ) : (
        <Project project={selectedProject} onDelete={handleDelete}/>
      )}
    </div>
  );
}

export default App;
