import "../pages/Css/global.css"
import { FiSearch,FiTrash } from "react-icons/fi"
import { FaShoppingCart } from "react-icons/fa"
import { HiArrowNarrowRight } from "react-icons/hi"
import { AiOutlinePlus } from "react-icons/ai"
import Food from "./Crads/Food";
import { images } from "../components/constants"
import AddButton from "../components/Ul/AddButton"
import React, {useState} from "react"
import Button from "../components/Ul/Button"



const Home = () => {
    const {text,setText} = useState("")
    const [shop, setShop] = useState(false)
    const [remove,setRemove] = useState(false)
    const searchChange = (e)=>{
        setText(e.target.value)
    }
    const orderDlete =()=>{
        setRemove(!remove)
        console.log();
    }


    const openMenu = () => {
        setShop(!shop)
        console.log(shop);
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
                            <input placeholder="Search for food, coffe, etc.." className="header-input" value={text} onChange={searchChange}/>
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
                            <span className="spans">0</span>
                        </div>
                    </div>
                </div>
                <div className={`menu ${shop && 'active'}`}>
                    <div className="menu-shopping ">
                        <button className="menu_close"><HiArrowNarrowRight className={`right ${shop && 'active'}`} onClick={() => openMenu()} /></button>
                        <div className="add-people">
                            <div className="menu_info">
                                <h1 className="menu_title">Confirmation</h1>
                                <span className="menu_span">Orders #34562</span>
                            </div>
                            <AddButton classes={`add-btn`}><AiOutlinePlus /></AddButton>
                        </div>
                        <div className={`order ${remove && 'close'}`}>
                            <div>
                            <div className="orders_info-top">
                                <img src={images.seafood} className="order-img" alt="allfood" />
                                <div className="order_info">
                                    <h5 className="order-name">Spicy seasoned sea...</h5>
                                    <span className="order_price">$ 2.29</span>
                                </div>
                                    <div className="orders_prices">
                                        <span className="order_amount">2</span>
                                        <span className="order-price">$ 4,58</span>
                                    </div>
                            </div>
                            <div className="order_bottom">
                                <input type="text" placeholder="Order Note..." className="order-info"/>
                                <Button className={`classes ${remove && 'close'}`} click={()=>orderDlete()}>{<FiTrash/>}</Button>
                            </div>
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
