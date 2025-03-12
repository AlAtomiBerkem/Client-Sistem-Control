import React from 'react';
import '../styles/RegistrationStyle.css';
import MyInput from "../components/MyInput/MyInput";
import MyButton from "../components/MyButton/MyButton";
import { useForm } from "react-hook-form";
import WelcomeWindows from '../assets/welcome_window.png'

const Registration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onSubmit"
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <div className="registration__page">
                <div className="logo-img">
                    <img src={WelcomeWindows} alt="logo"/>
                </div>
            <div className='main'>
                    <div className=""></div>
                <div className='container'>
                    <div className='main__content'>
                        <h1>Регистрация</h1>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>
                                <p>Имя</p>
                                <MyInput
                                    register={register('firstName', {
                                        required: 'поле "Имя" обязательно к заполнению',
                                        minLength: {
                                            value: 2,
                                            message: 'минимум 2 символа'
                                        }
                                    })}
                                />
                                <div className="input-errors">
                                    {errors.firstName && <p>{errors.firstName.message}</p>}
                                </div>
                            </label>

                            <label>
                                <p>Фамилия</p>
                                <MyInput
                                    register={register('lastName', {
                                        required: 'поле "Фамилия" обязательно к заполнению',
                                        minLength: {
                                            value: 2,
                                            message: 'минимум 2 символа'
                                        }
                                    })}
                                />
                                <div className="input-errors">
                                    {errors.lastName && <p>{errors.lastName.message}</p>}
                                </div>
                            </label>

                            <label>
                                <p>Email</p>
                                <MyInput
                                    register={register('email', {
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

                            <label>
                                <p>Пароль</p>
                                <MyInput
                                    register={register('password', {
                                        required: 'поле "Пароль" обязательно к заполнению',
                                        minLength: {
                                            value: 8,
                                            message: 'минимум 8 символов'
                                        },
                                        pattern: {
                                            value: /^(?=.*[A-Z])(?=.*\d).+$/,
                                            message: 'пароль должен содержать заглавные буквы и цифры'
                                        }
                                    })}
                                />
                                <div className="input-errors">
                                    {errors.password && <p>{errors.password.message}</p>}
                                </div>
                            </label>
                            <div className="main__button">
                                <MyButton type="submit">Зарегистрироваться</MyButton>
                            </div>
                        </form>
                        <div className="main__avtorization">
                            <a>У вас уже есть учетная запись?</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Registration;
