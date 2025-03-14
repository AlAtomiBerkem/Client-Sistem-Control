import React from 'react';
import HeaderApp from "../components/Header/HeaderApp";
import NavBar from "../components/SideBar/SideBar";
import MyButton from "../components/MyButton/MyButton";
import WorkerItem from "../components/WorkerItem/WorkerItem";
import { selectWorker } from "../store/workerSlice/workerSelectors";
import { useSelector } from "react-redux";
import CreateWorkerModal from "../components/CreateWorkerModal/CreateWorkerModal";
import useModalManager from "../templates/useModalManager";
import '../styles/WorkerStyle.css';

const Workers = () => {
    const worker = useSelector(selectWorker);
    const { isOpen, openModal, closeModal } = useModalManager();

    return (
        <div className="worker-menu">
            <HeaderApp />
            <div className="worker-container">
                <NavBar />
                <div className="worker-content">
                    <div className="worker__content-body">
                        <div className='worker__content-header'>
                            <h1>Участники</h1>
                            <div className="worker__button">
                                <MyButton onClick={openModal}>+Добавить участника</MyButton>
                            </div>
                        </div>
                        <div className="worker__content">
                            {worker.map(worker => (
                                <WorkerItem key={worker.id} worker={worker} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && <CreateWorkerModal onClose={closeModal} />}
        </div>
    );
};

export default Workers;