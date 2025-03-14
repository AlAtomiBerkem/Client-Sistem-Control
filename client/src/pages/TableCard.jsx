import React from 'react';
import HeaderApp from "../components/Header/HeaderApp";
import NavBar from "../components/SideBar/SideBar";
import Arrow from "../assets/svg/TableProject/Arrow";
import { DeleteSvg, EditingSvg } from '../assets/svg/ProjectBtn';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectProject } from '../store/projectSlice/projectsSelectors'
import {useParams} from "react-router-dom";
import '../styles/TableCardsStyle.css';
import DeletingProjectModal from "../components/DeletingProjectModal/DeletingProjectModal";
import EditingProjectModal from "../components/EditingProjectModal/EditingProjectModal";
import useModalManager from '../templates/useModalManager'
import { deleteProjects } from '../store/projectSlice/projectsSlice';


const TableCard = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const projects = useSelector(selectProject);
    const project = projects.find((p) => p.id === parseInt(id));
    const dispatch = useDispatch();

    const {
        isOpen: isEditModalOpen,
        data: projectToEdit,
        openModal: handleEditOpenModal,
        closeModal: handleEditCloseModal,
    } = useModalManager();

    const {
        isOpen: isDeleteModalOpen,
        data: projectIdToDelete,
        openModal: handleOpenModal,
        closeModal: handleCloseModal,
    } = useModalManager()


    const handleDelete = () => {
        if (projectIdToDelete) {
            dispatch(deleteProjects(projectIdToDelete));
        }
        handleCloseModal();
        navigate('/project');

    };

    const handleNavigate = () => {
        navigate('/project');
    };

    if (!project) {
        return <div>Проект не найден!</div>;
    }


    return (
        <>
            <div className="table-menu">
                <HeaderApp />
                <div className="table-container">
                    <NavBar />
                    <div className="table-content">
                        <div className="table__content-body">
                            <div className="table__content-header">
                                <div className="header__left">
                                    <Arrow onClick={() => handleNavigate()} />
                                    <h3>Карточка проекта</h3>
                                </div>
                                <div className="header__right">
                                    {project.id} --- "{project.name}"
                                </div>
                            </div>
                            <div className="table-body__header">
                                <h3>{project.name}</h3>
                                <div className="table-body__date">
                                    12.04.2025 15:00 --- 24.09.2025 10:22
                                </div>
                                <span>статус</span>
                                <div className="table-body__control">
                                    <EditingSvg
                                        className="project-tables__btn"
                                        onClick={() => handleEditOpenModal(project)}
                                    />
                                    <DeleteSvg
                                        className="project-tables__btn"
                                        onClick={() => handleOpenModal(project.id)}
                                    />
                                </div>
                            </div>
                            <div className="project-details">
                                <div className="details-column">
                                    <span className="details-label">Название проекта:</span>
                                    <span className="details-label">Описание проекта:</span>
                                    <span className="details-label">Кто создал задачу:</span>
                                    <span className="details-label">Кто куратор проекта:</span>
                                    <span className="details-label">Исполнитель:</span>
                                </div>
                                <div className="details-column">
                                    <span className="details-value">{project.name}</span>
                                    <span className="details-value">{project.description}</span>
                                    <span className="details-value">{project.creator}</span>
                                    <span className="details-value">{project.curator}</span>
                                    <span className="details-value">{project.executor}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isDeleteModalOpen && (
                    <DeletingProjectModal
                        onClose={handleCloseModal}
                        onDelete={handleDelete}
                    />
                )}
                {isEditModalOpen && projectToEdit && (
                    <EditingProjectModal
                        project={projectToEdit}
                        onClose={handleEditCloseModal}
                    />
                )}
            </div>
        </>
    );
};

export default TableCard;