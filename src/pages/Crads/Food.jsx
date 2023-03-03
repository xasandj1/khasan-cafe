import React, { useState } from 'react'
import "../Css/global.css"
import { BsChevronDown } from "react-icons/bs"
import Cards from './Const'
const Food = (props) => {
    return (
        <section className='food'>
            <div className='food-content'>
                <div className='food_top'>
                    <h2 className='food-title'>Choose Dishes</h2>
                    <div className='dropdown'>
                        <button className='dropbtn'><BsChevronDown color='white' fontSize={15} /><p className='btn_txt'>Drop It</p></button>
                        <div className='dropdown-content'>
                            <a href='#!'>Item 1</a>
                            <a href='#!'>Item 2</a>
                            <a href='#!'>Item 3</a>
                        </div>
                    </div>
                </div>
                <div className='cards-btn'>
                    {Cards.map((card, i) => (
                        <div className='cadrs' key={i}>
                            <button className='cards-btns' onClick={() => props.hendleChange()}>
                                <img src={card.seafood} alt="allfood" className="seafood" />
                                <div className='card-text'>
                                    <h3 className='cards-title'>{card.txt}</h3>
                                    <span className='cards-span'>{card.price}</span>
                                    <p className='cards_txt'>{card.bowls}</p>
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Food