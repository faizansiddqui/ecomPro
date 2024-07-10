import React, { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import logo from '../Assests/akamifyc.png';
import { Link } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";
import { CgSearch } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { ShopContext } from "../../Context/shopContext";

const Navbar = () => {
    const [menu, setMenu] = useState([]);
    const { getTotalCartItems } = useContext(ShopContext);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos, visible]);

    // Load active menu from localStorage on component mount
    useEffect(() => {
        const storedMenu = localStorage.getItem('activeMenu');
        if (storedMenu) {
            setMenu(storedMenu);
        }
    }, []);

    // Update active menu and save to localStorage
    const handleClick = (menuName) => {
        setMenu(menuName);
        localStorage.setItem('activeMenu', menuName);
    };

    return (
        <div className='navbar'>
            
            <div className="top">
                <div className="nav-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="dwn-app">
                    <span> DownLoad App </span>
                </div>
                <div className="search-bar">
                    <CgSearch className="SearchIcon" />
                    <input type="text" placeholder="Search Product And More..." />
                </div>

                <div className="sales">
                    <span> Become a seller </span>
                </div>

                <div className="login-btn">
                    <button><Link to={'/login'}>Login </Link> </button>
                    <RiAccountCircleFill />
                </div>

                <div className="nav-login-cart">
                    <div className="cart">
                        <Link to={'/cart'}><FiShoppingCart />
                            <div className="nav-cart-count">{getTotalCartItems()}</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="between">

            </div>
            <div className={`bottom ${visible ? "slide-up" : "slide-down"}`}>
                <div className="nav-menu">
                    {/* <div> h1</div> */}

                    <ul>
                        <li onClick={() => handleClick('Shop')}>
                            <Link to={'/'}>Shop</Link> {menu === 'Shop' ? <hr /> : ""}
                        </li>
                        <li onClick={() => handleClick('Man')}>
                            <Link to={'/mens'}>Men</Link> {menu === 'Man' ? <hr /> : ""}
                        </li>
                        <li onClick={() => handleClick('Women')}>
                            <Link to={'/womens'}>Womens</Link> {menu === 'Women' ? <hr /> : ""}
                        </li>
                        <li onClick={() => handleClick('Kids')}>
                            <Link to={'/kids'}>Kids</Link> {menu === 'Kids' ? <hr /> : ""}
                        </li>
                        <li onClick={() => handleClick('Electronic')}>
                            <Link to={''}>Electronic</Link> {menu === 'Electronic' ? <hr /> : ""}
                        </li>
                        <li onClick={() => handleClick('Room Book')}>
                            <Link to={''}>Room Book</Link> {menu === 'Room Book' ? <hr /> : ""}
                        </li>
                        <li onClick={() => handleClick('Fast Taxi')}>
                            <Link to={''}>Fast taxi</Link> {menu === 'Fast Taxi' ? <hr /> : ""}
                        </li>
                        {/* <li onClick={() => handleClick('Cars Book For Marriage')}>
                                <Link to={''}>Cars Book For Marriage</Link> {menu === 'Cars Book For Marriage' ? <hr /> : ""}
                            </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
