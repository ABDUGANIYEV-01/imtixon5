import React, { useContext, useRef } from 'react';
import "./Layout.scss";
import { Navigate, NavLink, Outlet, Link } from 'react-router-dom';
import Logo from "../../img and vidyo/svg/Watchflix.svg";
import searchIcon from "../../img and vidyo/svg/search.svg";
import btnIcon from "../../img and vidyo/svg/Vector.svg";
import map from "../../img and vidyo/svg/map.svg";
import mail from "../../img and vidyo/svg/mail.svg";
import tel from "../../img and vidyo/svg/Phone.svg";
import { LoginContext } from '../../Provider/LoginProvider';
import { MovieContext } from '../../Provider/MovieProvider';
import Logout from '../../img and vidyo/png/log out.png';

const Layout = () => {
    const { token, setToken } = useContext(LoginContext);
    const { setTitle } = useContext(MovieContext)
    const iconRef = useRef()
    const labelRef = useRef()
    const inputRef = useRef()

    if (!token) {
        return <Navigate to="login" />
    }

    function seeInput() {
        iconRef.current.style.display = "none"
        labelRef.current.style.display = "flex"
    }

    function NotInput() {
        iconRef.current.style.display = "flex"
        labelRef.current.style.display = "none"
    }

    function logout() {
        localStorage.removeItem('token')
        setToken(false)
    }

    const Linktosearch = ()=>{
        NotInput();
     setTitle(inputRef.current.value)
    }

    return (
        <>
            {
                token ? <nav className='navbar'>
                    <div className="container">
                        <div className="navbar__block">
                            <div className='nav__wraper'>
                                <img src={Logo} alt="Logo" />
                                <ul className='navbar__list'>
                                    <NavLink className='navbar__list__link' to={"/"}>Home</NavLink>
                                    <NavLink className='navbar__list__link' to={"movies"}>Movies</NavLink>
                                    <NavLink className='navbar__list__link' to={"category"}>Category</NavLink>
                                </ul>
                            </div>
                            <span className='nav__wraper'>
                                <label className='navbar__label' ref={labelRef}>
                                    <input ref={inputRef} type="text" placeholder='Enter search phrase..' />
                                    <Link to="/search" onClick={Linktosearch}>
                                        <img src={searchIcon} alt="icon" />
                                    </Link>
                                </label>
                                <img className='navbar__icon' src={searchIcon} alt="icon" onClick={seeInput} ref={iconRef} />
                                <span className='nav__wraper'>
                                    <img className='navbar__img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1024px-Black_flag.svg.png" alt="" />
                                    <p className='navbar__name'>John Glich</p>
                                    <span className='drobDown' onClick={logout}> <img src={Logout}  /> Logout</span>
                                </span>
                            </span>
                        </div>
                    </div>
                </nav> : <></>
            }

            <Outlet />

            {
                token ? <footer className='footer'>
                    <span className="bg"></span>
                    <div className="container">
                        <div className="footer__block">
                            <div className="footer__info">
                                <h3 className='footer__info__title'>Watchflix</h3>
                                <p className='footer__info__text'>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                                <p className='footer__info__name'>Join Newsletters</p>
                                <label className='footer__info__label'>
                                    <input className='footer__info__input' type="email" placeholder='Insert your mail here' />
                                    <button className='footer__info__btn' type='button'>
                                        <img src={btnIcon} alt="icon" />
                                    </button>
                                </label>
                            </div>

                            <div>
                                <div className='footer__links'>
                                    <ul className='footer__nav'>
                                        <li className='footer__nav__name'>Product</li>
                                        <li className='footer__nav__item'>Movies</li>
                                        <li className='footer__nav__item'>TV Show</li>
                                        <li className='footer__nav__item'>Videos</li>
                                    </ul>
                                    <ul className='footer__nav'>
                                        <li className='footer__nav__name'>Media Group</li>
                                        <li className='footer__nav__item'>Nice Studio</li>
                                        <li className='footer__nav__item'>Nice News</li>
                                        <li className='footer__nav__item'>Nice TV</li>
                                    </ul>
                                    <ul className='footer__nav'>
                                        <li className='footer__nav__name'>Sitemap</li>
                                        <li className='footer__nav__item'>About</li>
                                        <li className='footer__nav__item'>Careers</li>
                                        <li className='footer__nav__item'>Press</li>
                                    </ul>
                                </div>

                                <div className="footer__information">
                                    <span className='footer__information__item'>
                                        <img className='footer__information__icon' src={map} alt="" />
                                        <p className='footer_contacts__text'>Yunusobod</p>
                                    </span>
                                    <span className='footer__information__item'>
                                        <img className='footer__information__icon' src={mail} alt="" />
                                        <p className='footer_contacts__text'>abduganiyevAbduqahhor@gmail.com</p>
                                    </span>
                                    <span className='footer__information__item'>
                                        <img className='footer__information__icon' src={tel} alt="" />
                                        <p className='footer_contacts__text'>+998940460100</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer> : <></>
            }
        </>
    );
}

export default Layout;
