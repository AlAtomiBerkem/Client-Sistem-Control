import React from 'react';
import './CreateProjectModal.css';
import MyButton from "../MyButton/MyButton";
import { addProject } from "../../store/projectSlice/projectsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const CreateProjectModal = ({ onClose }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onSubmit"
    });

    const onSubmit = (data) => {
        const newProject = {
            name: data.projectName,
            description: data.projectDescription,
            curator: data.email,
            executor: data.email,
            status: data.projectStatus,
        };
        dispatch(addProject(newProject));
        onClose();
        navigate('/project');
    };

    const handleCancel = () => {
        onClose();
    };

    return (
        <div className="create-project-modal">
            <div className="create-project__content">
                <div className="create-project__header">
                    <h2>Создание проекта</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form__items">
                        <label>
                            <div className="label-name">
                                Название проекта
                            </div>
                            <input
                                type="text"
                                placeholder="название проекта"
                                {...register('projectName', {
                                    required: 'Название должно быть обязательно',
                                    minLength: {
                                        value: 4,
                                        message: 'минимум 4 символа'
                                    }
                                })}
                            />
                            <div className="input-errors">
                                {errors.projectName && <p>{errors.projectName.message}</p>}
                            </div>
                        </label>
                    </div>
                    <div className="form__items">
                        <label>
                            <div className="label-name">
                                Описание проекта
                            </div>
                            <input
                                type="text"
                                placeholder="описание проекта"
                                {...register('projectDescription', {
                                    required: 'Описание должно быть обязательно',
                                    minLength: {
                                        value: 10,
                                        message: 'минимум 10 символов'
                                    }
                                })}
                            />
                            <div className="input-errors">
                                {errors.projectDescription && <p>{errors.projectDescription.message}</p>}
                            </div>
                        </label>
                    </div>
                    <div className="form__items">
                        <div className="form__select">
                            <select
                                {...register('projectStatus', {
                                    required: 'Статус должен быть выбран',
                                })}
                            >
                                <option value="Активный">Активный</option>
                                <option value="Неактивный">Неактивный</option>
                            </select>
                            <div className="input-errors">
                                {errors.projectStatus && <p>{errors.projectStatus.message}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="form__items">
                        <label>
                            <div className="label-name">
                                Пригласить в проект
                            </div>
                            <input
                                type="text"
                                placeholder="email"
                                {...register('email', {
                                    required: 'поле "Email" обязательно к заполнению',
                                    pattern: {
                                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                        message: 'адрес почты должен содержать знаки @ и .'
                                    },
                                })}
                            />
                            <div className="input-errors">
                                {errors.email && <p>{errors.email.message}</p>}
                            </div>
                        </label>
                    </div>
                    <div className="form__buttons">
                        <MyButton type="button" onClick={handleCancel}>Отменить</MyButton>
                        <MyButton type="submit">Создать проект</MyButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateProjectModal;