import React, { useState } from 'react'
import { images } from '../../components/constants'
import Button from '../../components/Ul/Button'
import { FiTrash } from "react-icons/fi"
import "../../pages/Css/global.css"
const AddMenu = (props) => {
    const [remove, setRemove] = useState(false)
    const orderDlete = () => {
        setRemove(!remove)
    }
    return (
        <div className={`order ${remove && 'close'}`}>
            <div className="orders_info-top">
                <img src={images.seafood} className="order-img" alt="allfood" />
                <div className="order_info">
                    <h5 className="order-name">Spicy seasoned sea...</h5>
                    <span className="order_price">$ 2.29</span>
                </div>
                <div className="orders_prices">
                    <span className="order_amount" onChange={()=>props.hendlChange()}>{props.price}</span>
                    <span className="order-price">$ 4,58</span>
                </div>
            </div>
            <div className="order_bottom">
                <input type="text" placeholder="Order Note..." className="order-info" />
                <Button className={`classes ${remove && 'close'}`} click={() => orderDlete()}>{<FiTrash />}</Button>
            </div>
        </div>
    )
}

export default AddMenu