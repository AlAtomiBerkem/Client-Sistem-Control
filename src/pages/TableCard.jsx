import React from 'react';
import HeaderApp from "../components/Header/HeaderApp";
import NavBar from "../components/SideBar/SideBar";

import '../styles/TableCardsStyle.css'

const TableCard = () => {
        return (
            <>
                <div className="table-menu">
                    <HeaderApp />
                    <div className="table-container">
                        <NavBar />
                        <div className="table-content">
                            тут будет находятся Таблицы для проектов
                        </div>
                    </div>
                </div>
            </>
        );
}

export default TableCard;