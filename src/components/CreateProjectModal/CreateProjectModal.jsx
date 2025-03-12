import React from 'react';
import './CreateProjectModal.css';
import MyButton from "../MyButton/MyButton";
import MyInput from "../MyInput/MyInput";

const CreateProjectModal = ({ onClose }) => {
    const [status, setStatus] = React.useState('active');

    const handleCancel = () => {
        onClose();
    };

    const handleCreateProject = () => {
        // Логика создания проекта
        onClose();
    };

    return (
        <div className="create-project-modal">
            <div className="create-project__content">
                <div className="create-project__header">
                    <h2>Создание проекта</h2>
                </div>
                <form action="">
                    <div className="form__items">
                        <label>
                            <div className="label-name">
                                Название проекта
                            </div>
                            <MyInput type="text" placeholder="Введите название проекта" />
                        </label>
                    </div>
                    <div className="form__items">
                        <label>
                            <div className="label-name">
                                Описание проекта
                            </div>
                            <MyInput type="text" placeholder="Введите описание проекта" />
                        </label>
                    </div>
                    <div className="form__items">
                        <div className="form__select">
                            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="active">Активный</option>
                                <option value="inactive">Неактивный</option>
                            </select>
                        </div>
                    </div>
                    <div className="form__items">
                        <label>
                            <div className="label-name">
                                Пригласить в проект
                            </div>
                            <MyInput type="text" placeholder="Введите email" />
                        </label>
                    </div>
                    <div className="form__buttons">
                        <MyButton onClick={handleCancel}>Отменить</MyButton>
                        <MyButton onClick={handleCreateProject}>Создать проект</MyButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateProjectModal;