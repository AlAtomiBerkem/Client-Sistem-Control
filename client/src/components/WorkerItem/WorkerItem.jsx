import React from 'react';
import './WorkerItemStyle.css'

const WorkerItem = ({ worker }) => {
    return (
        <div className="worker-item">
            <div className="worker-item__content">
                <h3 className="worker-item__name">{worker.name}</h3>
                <div className="worker-item__details">
                    <p className="worker-item__position"><strong>Должность:</strong> {worker.position}</p>
                    <p className="worker-item__email"><strong>Email:</strong> {worker.email}</p>
                    <p className="worker-item__phone"><strong>Телефон:</strong> {worker.phone}</p>
                    <p className="worker-item__city"><strong>Город:</strong> {worker.city}</p>
                    <p className="worker-item__dob"><strong>Дата рождения:</strong> {worker.dob}</p>
                </div>
            </div>
        </div>
    );
};

export default WorkerItem;