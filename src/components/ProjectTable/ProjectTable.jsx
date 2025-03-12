import React from 'react';
import './ProjectTableStyle.css'
import {DeleteSvg, EditingSvg} from '../../assets/svg/ProjectBtn'
// import DeletingProjectModal from '../components/DeletingProjectModal/DeletingProjectModal'


const ProjectTable = ({projects, onDelete}) => {
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
                        </tr>
                    </thead>
                    <tbody>
                    {projects.map((project) => (
                        <tr key={project.id}>
                            <td>{project.id}</td>
                            <td>{project.name}</td>
                            <td>{project.description}</td>
                            <td>{project.curator}</td>
                            <td>{project.executor}</td>
                            <td>{project.status}</td>
                            <td>
                                <EditingSvg className="project-tables__btn"/>
                                <DeleteSvg className="project-tables__btn" onClick={() => onDelete(project.id)} />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </>
        );
    }

export default ProjectTable;