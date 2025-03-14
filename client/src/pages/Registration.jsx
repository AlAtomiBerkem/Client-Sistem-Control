import React from 'react';
import '../styles/RegistrationStyle.css';
import MyInput from "../components/MyInput/MyInput";
import MyButton from "../components/MyButton/MyButton";
import { useForm } from "react-hook-form";
import WelcomeWindows from '../assets/welcome_window.png'
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Registration = () => {

    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                console.log('User registered successfully:', result);
                navigate('/');
            } else {
                console.error('Registration failed:', result.message);
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onSubmit"
    });


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
                            <Link className="main__avtorization" to='/authorization'>У вас уже есть учетная запись?</Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Registration;
