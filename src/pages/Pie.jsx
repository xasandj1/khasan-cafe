import { AiOutlineArrowUp, AiOutlineDollarCircle } from "react-icons/ai"

const Pie = () => {
    return (
        <section className="pie">
            <div className="container">
                <div className="pie-content">
                    <div className="pie-content_top">
                        <h1 className="header_title">Dashboard</h1>
                        <span className="header-txt ">Tuesday, 21 Feb 2023 Developing by XT</span>
                    </div>
                </div>
                <div className="pie-content_bottom">
                    <div className="pie_cards">
                        <div className="pie-bottom_card">
                            <h5 className="title_icon"><AiOutlineDollarCircle className="pie_icon" /></h5>
                            <span className="bottom_span">+32.40%</span>
                            <span className="buttom_up"><AiOutlineArrowUp /></span>
                        </div>
                        <div className="pie-bottom_price">
                            <span className="pie-bottom_span">$10,243.00</span>
                            <p className="pie_txt">Total Revenue</p>
                        </div>
                        
                    </div>
                    <div className="pie_cards">
                        <div className="pie-bottom_card">
                            <h5 className="title_icon"><AiOutlineDollarCircle className="pie_icon" /></h5>
                            <span className="bottom_span">+32.40%</span>
                            <span className="buttom_up"><AiOutlineArrowUp /></span>
                        </div>
                        <div className="pie-bottom_price">
                            <span className="pie-bottom_span">$10,243.00</span>
                            <p className="pie_txt">Total Revenue</p>
                        </div>
                        
                    </div>
                    <div className="pie_cards">
                        <div className="pie-bottom_card">
                            <h5 className="title_icon"><AiOutlineDollarCircle className="pie_icon" /></h5>
                            <span className="bottom_span">+32.40%</span>
                            <span className="buttom_up"><AiOutlineArrowUp /></span>
                        </div>
                        <div className="pie-bottom_price">
                            <span className="pie-bottom_span">$10,243.00</span>
                            <p className="pie_txt">Total Revenue</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
};

export default Pie;