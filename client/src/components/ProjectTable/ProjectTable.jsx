import React from 'react';
import './ProjectTableStyle.css';
import { DeleteSvg, EditingSvg } from '../../assets/svg/ProjectBtn';
import DeletingProjectModal from '../DeletingProjectModal/DeletingProjectModal';
import EditingProjectModal from "../EditingProjectModal/EditingProjectModal";
import {useNavigate} from "react-router-dom";
import  useModalManager from '../../templates/useModalManager';


const ProjectTable = ({ projects, onDelete }) => {
    const navigate = useNavigate();

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
            onDelete(projectIdToDelete);
        }
        handleCloseModal();
        navigate('/project');
    };

    const handleRowDoubleClick = (project) => {
        console.log('информация о проекте', project)
        navigate(`/tablecard/${project.id}`)
    }

    return (
        <>
            <table className="project-tables">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Описание</th>
                    <th>Куратор</th>
                    <th>Исполнитель</th>
                    <th>Статус</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                {projects.map((project) => (
                    <tr
                        key={project.id}
                        className="project-tables__row"
                        onDoubleClick={() => handleRowDoubleClick(project)}
                        tabIndex={0}
                    >
                        <td>{project.id}</td>
                        <td>{project.name}</td>
                        <td>{project.description}</td>
                        <td>{project.curator}</td>
                        <td>{project.executor}</td>
                        <td>{project.status}</td>
                        <td>
                            <EditingSvg
                                className="project-tables__btn"
                                onClick={() => handleEditOpenModal(project)}
                            />
                            <DeleteSvg
                                className="project-tables__btn"
                                onClick={() => handleOpenModal(project.id)}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
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
        </>
    );
};

export default ProjectTable;