import React from 'react';

import {
    CalendarSvg,
    InvitationsSvg,
    LogoutSvg,
    MainSvg,
    ParticipantsSvg,
    ProfileSvg,
    SideBar,
    ProjectsSvg,
    SettingSvg,
    TasksSvg
} from '../../assets/svg/SideBar/';

import { Layout, Menu } from 'antd';
import './SideBar.css';
import {Link} from "react-router-dom";
const { Sider } = Layout;


const Sidebar = () => {
    const [collapsed, setCollapsed] = React.useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Sider
            className="sidebar"
            collapsed={collapsed}
            breakpoint="lg"
            collapsedWidth="80"
            width={200}
            style={{ margin: 0 }}
        >
            <div className="logo" />
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="11" icon={<SideBar />} onClick={toggleCollapsed}>
                    {collapsed ? 'Развернуть' : 'Свернуть'}
                </Menu.Item>
                <div className="menu-divider"></div>
                <Menu.Item key="1" icon={<MainSvg />}>
                    <Link to='/'>Главная</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<TasksSvg />}>
                    Задачи
                </Menu.Item>
                <Menu.Item key="3" icon={<ProjectsSvg />}>
                    <Link to="/project">Проекты</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<InvitationsSvg />}>
                    Приглашения
                </Menu.Item>
                <Menu.Item key="5" icon={<CalendarSvg />}>
                    Календарь
                </Menu.Item>
                <Menu.Item key="6" icon={<ParticipantsSvg />}>
                    Участники
                </Menu.Item>
                <Menu.Item key="7" icon={<ProfileSvg />}>
                    Профиль
                </Menu.Item>
                <div className="menu-divider"></div>
                <Menu.Item key="8" icon={<SettingSvg />}>
                    Настройки
                </Menu.Item>
                <Menu.Item key="9" icon={<LogoutSvg />}>
                    Выход из системы
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default Sidebar;
