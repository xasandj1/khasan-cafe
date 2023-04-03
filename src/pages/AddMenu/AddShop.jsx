import React, { useContext } from 'react'
import { images } from '../../components/constants'
import Button from '../../components/Ul/Button'
import { FiTrash } from "react-icons/fi"
import "../../pages/Css/global.css"
import Context from '../../components/context/NoteContext'
const AddShop = () => {
    const { remove, orderDlete, price, hendlChange, money } = useContext(Context)
    // const [money,setMoney] = useState(2.29)
    // const getPrice = () =>{
    //     if (price === "1") {
    //         return`${price * 2}`;
    //     }else{
    //         return '2.29'
    //     }
    // }
    const getPrice = () => {
        if (price === "1") {
            return `${money * 1}`;
        } else if (price === "2") {
            return `${money * 2}`
        } 
    }
    return (
        <div>
            <div className="orders_info-top">
                <img src={images.seafood} className="order-img" alt="allfood" />
                <div className="order_info">
                    <h5 className="order-name">Spicy seasoned sea...</h5>
                    <span className="order_price">$ 2.29</span>
                </div>

                <div className="orders_prices">
                    <span className="order_amount" onChange={() => hendlChange()}>{price}</span>
                    <span className="order-price" onChange={() => getPrice()}>$ {money}</span>
                </div>
            </div>
            <div className="order_bottom">
                <input type="text" placeholder="Order Note..." className="order-info" />
                <Button className={`classes ${remove && 'close'}`} click={() => orderDlete()}>{<FiTrash />}</Button>
            </div>
            <div className="total_price">
                <div className="total_price-amounts">
                    <p className='total_price-text'>Sub total</p>
                    <p className='total_price-amount'>{money}</p>
                </div>
            </div>
        </div>
    )
}

export default AddShop