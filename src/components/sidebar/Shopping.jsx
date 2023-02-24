import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { images } from '../constants';
import './sidebar.scss';

const sidebarNavItems = [
    {
       
        icon: images.home,
        to: '/',
        section: 'home'
    },
    {
       
        icon: images.discount,
        to: '/discount',
        section: 'discount'
    },
    {
     
        icon: images.pie,
        to: '/pie',
        section: 'pie'
    },
    {
        icon: images.sms,
        to: '/message',
        section: 'message'
    },
    {
        icon: images.ball,
        to: '/ball',
        section: 'ball'
    },
    {
        icon: images.settings,
        to: '/settings',
        section: 'settings'
    },
    {
        icon: images.logout,
        to: '/logout',
        section: 'logout'
    },
]

const Shopping = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='shopping'>
           
    </div>;
};

export default Shopping;
