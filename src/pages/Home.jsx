import React, { useContext } from "react"
import "../pages/Css/global.css"
import { FiSearch } from "react-icons/fi"
import { FaShoppingCart } from "react-icons/fa"
import { HiArrowNarrowRight } from "react-icons/hi"
import { RiMenu2Line } from "react-icons/ri"
import { AiOutlinePlus } from "react-icons/ai"
import Food from "./Crads/Food";
import AddButton from "../components/Ul/AddButton"
import Button from "../components/Ul/Button"
import AddMenu from "./AddMenu/AddOrder"
import Context from "../components/context/NoteContext"



const Home = () => {

    const { text, shop, openMenu, searchChange, menu, price, menuOpen, hendleChange } = useContext(Context)

    return (
        <header className="header">
            <div className="container">
                <div className="header_info">
                    <div className="header_top">
                        <Button classes={`menuBtn ${menu && "left_menu"}`} onClick={() => menuOpen()}><RiMenu2Line /></Button>
                        <div className="header_top-links">
                            <h1 className="header_title">Khasan Resto</h1>
                            <p className="header-txt">Tuesday, 21 Feb 2023 Developing by XT</p>
                        </div>
                        <div className="header_serachs">
                            <input placeholder="Search for food, coffe, etc.." className="header-input" value={text} onChange={() => searchChange} />
                            <FiSearch className="header_search" />
                        </div>
                    </div>
                    <div className="header_bottom">
                        <ul className="header_list">
                            <li><a href="#!" className="header_link">Hot Dishes</a></li>
                            <li><a href="#!" className="header_link">Cold Dishes</a></li>
                            <li><a href="#!" className="header_link">Soup</a></li>
                            <li><a href="#!" className="header_link">Grill</a></li>
                            <li><a href="#!" className="header_link">Appetizer</a></li>
                            <li><a href="#!" className="header_link">Dessert</a></li>
                        </ul>
                        <div className="shopping-icons">
                            <button className={`shopping-btn ${shop && 'active'}`} onClick={() => openMenu()}><FaShoppingCart className="icon" /></button>
                            <span className="spans">{price}</span>
                        </div>
                    </div>
                </div>
                <div className={`menu ${shop && 'active'}`}>
                    <div className="menu-shopping">
                        <button className="menu_close"><HiArrowNarrowRight className={`right ${shop && 'active'}`} onClick={() => openMenu()} /></button>
                        <div className="add-people">
                            <div className="menu_info">
                                <h1 className="menu_title">Confirmation</h1>
                                <span className="menu_span">Orders #34562</span>
                            </div>
                            <AddButton classes={`add-btn`}><AiOutlinePlus /></AddButton>
                        </div>
                        <AddMenu hendleChange={hendleChange} price={price} />
                    </div>
                </div>
                <Food hendleChange={hendleChange} />
            </div>
        </header>
    )
};

export default Home;
