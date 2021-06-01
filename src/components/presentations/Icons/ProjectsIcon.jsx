const ProjectsIcon = ({ hover = false }) => {
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={(hover && '18') || "16"}
          height={(hover && '18') || "16"}
          fill="currentColor"
          className="bi bi-kanban-fill"
          viewBox="0 0 16 16"
          style={{ transition: 'width 350ms ease, height 350ms ease'}}
        >
            <path d="M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11zm5 2h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-5 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm9-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
        </svg>
    );
}
 
export default ProjectsIcon;