import React from 'react';
import './DeletingProjectModalStyle.css'

const DeletingProjectModal = ({ onClose, onDelete }) => {
    const handleDeleteProject = () => {
        onDelete();
    };

    return (
        <div className="delete-project-modal">
            <div className="delete-project__content">
                <div className="delete-project__header">
                    <h2>Вы уверены, что хотите удалить проект?</h2>
                    <p>После удаления проекта, вы не сможете восстановить его</p>
                    <div className="delete-form__buttons">
                        <button onClick={onClose}>Отменить</button>
                        <button onClick={handleDeleteProject}>Удалить проект</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeletingProjectModal;