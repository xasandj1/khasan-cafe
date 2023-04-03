import React, { useContext } from 'react'
import "../../pages/Css/global.css"
import Context from '../../components/context/NoteContext'
import AddShop from './AddShop'
const AddMenu = () => {
    const { remove} = useContext(Context)
    return (
        <div className={`order ${remove && 'close'}`}>
            <AddShop/>
        </div>
    )
}

export default AddMenu