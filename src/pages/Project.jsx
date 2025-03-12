import React from 'react';
import HeaderApp from "../components/Header/HeaderApp";
import NavBar from "../components/SideBar/SideBar";
import '../styles/ProjectStyle.css'
import { Folder, Plus, Person } from "../assets/svg/ProjectBtn";
import ProjectTable from "../components/ProjectTable/ProjectTable";
import CreateProjectModal from '../components/CreateProjectModal/CreateProjectModal'

const Project = () => {

    const [projects, setProjects] = React.useState([
        {
            id: 1,
            name: "Проект 1",
            description: "Описание проекта 1",
            curator: "Иван Иванов",
            executor: "Петр Петров",
            status: "Активный",
        },
        {
            id: 2,
            name: "Проект 2",
            description: "Описание проекта 2",
            curator: "Анна Сидорова",
            executor: "Мария Кузнецова",
            status: "Завершен",
        },
    ]);

    const [modalOpen, setModalOpen] = React.useState(false);

    function handleModalOpen () {
        setModalOpen(true);
    }
    function handleModalClose () {
        setModalOpen(false);
    }

    const handleCreateProject = (newProject) => {
        setProjects([...projects, {...newProject, id: projects.length + 1}]);
        handleModalClose()
    }

    const handleDeleteProject = (projectId) => {
        setProjects(projects.filter((project) => project.id !== projectId));
    };

    return (
           <>
               <div className="project-menu">
                   <HeaderApp />
                   <div className="project-container">
                       <NavBar />
                       <div className="project-content">
                           <div className="project__content-body">
                               <div className='project__content-header'>
                                   <h1>Проекты</h1>
                                   <div className="project__content-fb">
                                       <Plus onClick={handleModalOpen}  className="project-content-svg"/>
                                       <Person className="project-content-svg"/>
                                       <Folder className="project-content-svg"/>
                                   </div>
                               </div>
                               <div className="project__content-content">
                                   <ProjectTable projects={projects} onDelete={handleDeleteProject} />
                                   {modalOpen &&(
                                       <CreateProjectModal onClose={handleModalClose} onCreate={handleCreateProject} />
                                   )}
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </>
        );
}

export default Project;