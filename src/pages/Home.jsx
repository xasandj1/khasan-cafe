import "./global.css"
import { FiSearch } from "react-icons/fi"
import { FaShoppingCart } from "react-icons/fa"
import { HiArrowNarrowRight } from "react-icons/hi"
import { AiOutlinePlus } from "react-icons/ai"
import Food from "./Crads/Food";
import { images } from "../components/constants"
import { useState } from "react"


const Home = () => {
    const [shop, setShop]=useState(false)
    const menu =()=>{
        shop()
    }
    return (
        <header className="header">
            <div className="container">
                <div className="header_info">
                    <div className="header_top">
                        <div className="header_top-links">
                            <h1 className="header_title">Khasan Resto</h1>
                            <p className="header-txt">Tuesday, 21 Feb 2023 Developing by XT</p>
                        </div>
                        <div className="header_serachs">
                            <input placeholder="Search for food, coffe, etc.." className="header-input" />
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
                            <button className="shopping-btn"><FaShoppingCart className="icon" /></button>
                            <span className="spans">1</span>
                        </div>
                    </div>
                </div>
                <div className={`menu`}>
                    <div className="menu-shopping ">
                        <button className="menu_close"><HiArrowNarrowRight className="right" /></button>
                        <div className="add-people">
                            <div className="menu_info">
                                <h1 className="menu_title">Confirmation</h1>
                                <span className="menu_span">Orders #34562</span>
                            </div>
                            <button className="menu_plus"><AiOutlinePlus /></button>
                        </div>
                        <div className="order">
                            <img src={images.seafood} className="order-img"/>
                            <div className="order_name">
                                <h5>Spicy seasoned sea...</h5>
                                <span>$ 2.29</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Food />
            </div>
        </header>
    )
};

export default Home;
