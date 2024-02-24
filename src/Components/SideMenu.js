import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function SideMenu({ openSlider, setOpenSlider }) {
    const location = useLocation();
    const path = location.pathname;
    return (
        <div className='vh-100'>
            <div className="nav-header d-flex justify-content-between align-content-center px-2 py-1 py-md-3">
                <h5 className="h5 py-2 py-md-0"><i className="fa fa-connectdevelop"></i> Dashboard</h5>
                <div className="close-btn d-lg-none">
                    <button className='px-3 py-2 rounded bg-dark text-light' onClick={() => { setOpenSlider(!openSlider) }}><i className="fas fa-close"></i></button>
                </div>
            </div>
            <div className="nav-body small d-flex flex-column justify-content-between" style={{ height: "90%" }}>
                <div className="nav-items">
                    <div className="nav-item m-2">
                        <Link to={'/dashboard'} className='text-decoration-none hover-side-nav-link'>
                            <div className={`nav-link py-2 rounded px-2 ${(path === "/dashboard" || path === "/") ? 'bg-white text-black fw-bold active-drop-shadow' : 'bg-transparent text-white fw-lighter'}`}>
                                <i className="fa fa-dashcube"></i> <span className="item ms-1"> Dashboard </span>
                            </div>
                        </Link>
                    </div>
                    <div className="nav-item m-2">
                        <Link to={'/products'} className='text-decoration-none hover-side-nav-link'>
                            <div className={`nav-link py-2 rounded px-2 ${path === "/products" ? 'bg-white text-black fw-bold active-drop-shadow' : 'bg-transparent text-white fw-lighter'}`}>
                                <i className="fas fa-box-open"></i> <span className="item ms-1"> Product</span>
                            </div>
                        </Link>
                    </div>
                    <div className="nav-item m-2">
                        <Link to={'/orders'} className='text-decoration-none hover-side-nav-link'>
                            <div className={`nav-link py-2 rounded px-2 ${path === "/orders" ? 'bg-white text-black fw-bold active-drop-shadow' : 'bg-transparent text-white fw-lighter'}`}>
                                <i className="fas fa-user"></i> <span className="item ms-1"> Orders</span>
                            </div>
                        </Link>
                    </div>
                    <div className="nav-item m-2">
                        <Link to={'/review'} className='text-decoration-none hover-side-nav-link'>
                            <div className={`nav-link py-2 rounded px-2 d-flex ${path === "/review" ? 'bg-white text-black fw-bold active-drop-shadow' : 'bg-transparent text-white fw-lighter'}`}>
                            {/* <svg className='svg-icon-' xmlns="http://www.w3.org/2000/svg" height="20" viewBox="70 -900 900 900" fill='white' width="20"><path d="M240-400h122l200-200q9-9 13.5-20.5T580-643q0-11-5-21.5T562-684l-36-38q-9-9-20-13.5t-23-4.5q-11 0-22.5 4.5T440-722L240-522v122Zm280-243-37-37 37 37ZM300-460v-38l101-101 20 18 18 20-101 101h-38Zm121-121 18 20-38-38 20 18Zm26 181h273v-80H527l-80 80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg> */}
                            <i className='material-symbols-outlined' style={{fontSize: "20px", marginLeft: "-2px"}}>rate_review</i> <span className="item ms-1"> Customer reviews</span>
                            </div>
                        </Link>
                    </div>
                    <div className="nav-item m-2">
                        <Link to={'/income'} className='text-decoration-none hover-side-nav-link'>
                            <div className={`nav-link py-2 rounded px-2 ${path === "/income" ? 'bg-white text-black fw-bold active-drop-shadow' : 'bg-transparent text-white fw-lighter'}`}>
                                <i className="fas fa-wallet"></i> <span className="item ms-1"> Income</span>
                            </div>
                        </Link>
                    </div>
                    <div className="nav-item m-2">
                        <Link to={'/coupon'} className='text-decoration-none hover-side-nav-link'>
                            <div className={`nav-link py-2 rounded px-2 ${path === "/coupon" ? 'bg-white text-black fw-bold active-drop-shadow' : 'bg-transparent text-white fw-lighter'}`}>
                                <i className="fas fa-percentage"></i> <span className="item ms-1"> Discount Coupon</span>
                            </div>
                        </Link>
                    </div>
                    <div className="nav-item m-2">
                        <Link to={'/help'} className='text-decoration-none hover-side-nav-link'>
                            <div className={`nav-link py-2 rounded px-2 ${path === "/help" ? 'bg-white text-black fw-bold active-drop-shadow' : 'bg-transparent text-white fw-lighter'}`}>
                                <i className="fas fa-question-circle"></i> <span className="item ms-1"> Help</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="nav-items">
                    <div className="nav-item m-2">
                        <Link to={'/profile'} className='text-decoration-none'>
                            <div className={`nav-link py-2 rounded px-2 text-white`}>
                                <i className="fas fa-user"></i> <span className="item ms-1"> User</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default SideMenu