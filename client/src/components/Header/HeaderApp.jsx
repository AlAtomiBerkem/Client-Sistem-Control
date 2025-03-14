import React from 'react'
import './HeaderApp.css'
import Notifications from "../../assets/svg/Notifications"


const HeaderApp = () => {
    return (
        <>
            <div className="Header">
                <div className="container-header">
                    <div className="left-block">
                    </div>
                    <div className="right-block">
                        <div className="notification">
                            <Notifications />
                        </div>
                        <div className="person-logo"></div>
                        <div className="personal-account">
                            <div className="user__name">Joe Pesci</div>
                            <div className="user__role">Администратор</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default  HeaderApp;