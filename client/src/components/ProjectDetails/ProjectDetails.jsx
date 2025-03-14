import React from 'react';
import './ProjectDetailsStyle.css'
const ProjectDetails = ({ project }) => {
    return (
        <div className="table-body__column">
            <div className="project-details">
                <div className="details-row">
                    <span className="details-label">Название проекта:</span>
                    <span className="details-value">{project.title}</span>
                </div>
                <div className="details-row">
                    <span className="details-label">Описание проекта:</span>
                    <span className="details-value">{project.description}</span>
                </div>
                <div className="details-row">
                    <span className="details-label">Кто создал задачу:</span>
                    <span className="details-value">{project.creator}</span>
                </div>
                <div className="details-row">
                    <span className="details-label">Кто куратор проекта:</span>
                    <span className="details-value">{project.curator}</span>
                </div>
                <div className="details-row">
                    <span className="details-label">Исполнитель:</span>
                    <span className="details-value">{project.executor}</span>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;