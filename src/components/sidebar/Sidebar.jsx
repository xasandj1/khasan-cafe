import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { images } from '../constants';
import "../../pages/Css/media.css"
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

const Sidebar = () => {
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


    return <div className={`sidebar ${"left_menu"}`}>
        <div className="sidebar__logo">
            <img src={images.logo} alt="logo" className='logo'/>
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `(translateX(-65%) * translateY${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex && 'active'}`}>
                            <div className="sidebar__menu__item__icon">
                                <img src={item.icon} alt="discount" className='icons'/>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

export default Sidebar;
