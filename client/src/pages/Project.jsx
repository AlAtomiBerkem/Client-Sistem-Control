import React from 'react';
import HeaderApp from "../components/Header/HeaderApp";
import NavBar from "../components/SideBar/SideBar";
import '../styles/ProjectStyle.css';
import { Folder, Plus, Person } from "../assets/svg/ProjectBtn";
import ProjectTable from "../components/ProjectTable/ProjectTable";
import CreateProjectModal from '../components/CreateProjectModal/CreateProjectModal';
import { useSelector, useDispatch } from "react-redux";
import { selectProject } from "../store/projectSlice/projectsSelectors";
import { deleteProjects } from "../store/projectSlice/projectsSlice";
import { useModalManager } from "../templates/useModalManager";

const Project = () => {
    const projects = useSelector(selectProject);
    const dispatch = useDispatch();
    const { isOpen, openModal, closeModal,} = useModalManager();

    const handleDeleteProject = (projectId) => {
        dispatch(deleteProjects(projectId));
    };

    return (
        <div className="project-menu">
            <HeaderApp />
            <div className="project-container">
                <NavBar />
                <div className="project-content">
                    <div className="project__content-body">
                        <div className='project__content-header'>
                            <h1>Проекты</h1>
                            <div className="project__content-fb">
                                <Plus onClick={openModal} className="project-content-svg" />
                                <Person className="project-content-svg" />
                                <Folder className="project-content-svg" />
                            </div>
                        </div>
                        <div className="project__content-content">
                            <ProjectTable
                                projects={projects}
                                onDelete={handleDeleteProject}
                            />
                            {isOpen && (
                                <CreateProjectModal onClose={closeModal} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;