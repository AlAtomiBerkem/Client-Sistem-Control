import React from 'react';
import HeaderApp from "../components/Header/HeaderApp";
import '../styles/MainStyle.css';
import NavBar from "../components/SideBar/SideBar";
import CreateProjectModal from "../components/CreateProjectModal/CreateProjectModal";

const Main = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
        <div className="main-menu">
            <HeaderApp />
            <div className="main-container">
                <NavBar />
                <div className="main-content">
                    <div className="main__create-project">
                        <div className="greetings">
                            <h2>Привет, Joe! У тебя еще нет ни одного проекта</h2>
                        </div>
                        <div className="create-project">
                            <button onClick={handleOpenModal} className="create-project__button">
                                + Создать проект
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && <CreateProjectModal onClose={handleCloseModal} />}
        </div>
        </>
    );
};

export default Main;