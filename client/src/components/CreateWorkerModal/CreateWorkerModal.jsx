import React from 'react';
import MyButton from "../MyButton/MyButton";
import { useForm } from "react-hook-form";
import './CreateWorkerModalStyle.css';

const CreateWorkerModal = ({ onClose }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onSubmit"
    });

    const onSubmit = (data) => {
        const newProject = {
            executor: data.email,
        };
        console.log(newProject);
        onClose();
    };

    return (
        <div className="worker-project-modal">
            <div className="worker-project__content">
                <div className="worker-project__header">
                    <h2>Пригласить в проект</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                        <MyButton type="button" onClick={onClose}>Отменить</MyButton>
                        <MyButton type="submit">Пригласить</MyButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateWorkerModal;