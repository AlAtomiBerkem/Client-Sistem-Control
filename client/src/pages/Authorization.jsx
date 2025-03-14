import React  from 'react';
import MyInput from "../components/MyInput/MyInput";
import MyButton from "../components/MyButton/MyButton";
import { useForm } from "react-hook-form";
import WelcomeWindows from '../assets/welcome_window.png'
import '../styles/AuthorizationStyle.css'
import { useNavigate } from 'react-router-dom';

const Authorization = () => {

const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onSubmit"
    });

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                console.log('Login successful:', result);
                navigate('/');
            } else {
                console.error('Login failed:', result.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

        return (
                <>
                    <div className="authorization__page">
                        <div className="logo-img">
                            <img src={WelcomeWindows} alt="logo"/>
                        </div>
                        <div className='main'>
                            <div className=""></div>
                            <div className='container'>
                                <div className='main__content'>
                                    <h1>Авторизация</h1>
                                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                            <MyButton type="submit">войти</MyButton>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
        );
    }


export default Authorization;