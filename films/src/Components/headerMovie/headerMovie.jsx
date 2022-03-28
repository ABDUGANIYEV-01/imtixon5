import React from 'react';
import PlayIcon from "../../img and vidyo/svg/HomePlay.svg";
import "./headerMovie.scss";
import clock from "../../img and vidyo/svg/sectionClock.svg"
import calendar from "../../img and vidyo/svg/Calendar.svg";
import { Link } from 'react-router-dom';

const HeaderMovie = ({ arr }) => {
    if (!arr) {
        return <></>
    }

    return (
        <section className='headerMovie'>
            <div className="container">
                <div className="headerMovie__item">
                    <Link to="movies" className="headerMovie__item__film">
                        <img className='headerMovie__item__film__bg' src={arr[5].Poster} alt="img"/>
                        <img className='headerMovie__item__film__icon' src={PlayIcon} alt="img" />
                        <h3 className="headerMovie__item__film__title">{arr[5].Title}</h3>
                        <p className='headerMovie__item__film__desc'>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    </Link>

                    <div className="headerMovie__item__cards">
                        <Link to="movies" className="headerMovie__item__card">
                            <div className="headerMovie__item__card__poster">
                                <img className='headerMovie__item__card__poster__bg' src={arr[6].Poster} alt="img" />
                                <img className='headerMovie__item__card__poster__icon' src={PlayIcon} alt="icon" />
                            </div>
                            <div className="headerMovie__item__card__info">
                                <p className="headerMovie__item__card__desc">Episode 1</p>
                                <h4 className='headerMovie__item__card__title'>{arr[6].Title}</h4>
                                <p className="headerMovie__item__card__desc">Lorem ipsum dolor sit amet, consec tetur adipis cing elit</p>
                                <span>
                                    <div className="headerMovie__item__date">
                                        <img src={clock} alt="icon" />
                                        <p>1hr 24mins</p>
                                    </div>
                                    <div className="headerMovie__item__date">
                                        <img src={calendar} alt="icon" />
                                        <p>June 2, 2021</p>
                                    </div>
                                </span>
                            </div>
                        </Link>

                        <Link to="movies" className="headerMovie__item__card">
                            <div className="headerMovie__item__card__poster">
                                <img className='headerMovie__item__card__poster__bg' src={arr[7].Poster} alt="img" />
                                <img className='headerMovie__item__card__poster__icon' src={PlayIcon} alt="icon" />
                            </div>
                            <div className="headerMovie__item__card__info">
                                <p className="headerMovie__item__card__desc">Episode 1</p>
                                <h4 className='headerMovie__item__card__title'>{arr[7].Title}</h4>
                                <p className="headerMovie__item__card__desc">Lorem ipsum dolor sit amet, consec tetur adipis cing elit</p>
                                <span>
                                    <div className="headerMovie__item__date">
                                        <img src={clock} alt="icon" />
                                        <p>1hr 24mins</p>
                                    </div>
                                    <div className="headerMovie__item__date">
                                        <img src={calendar} alt="icon" />
                                        <p>June 2, 2021</p>
                                    </div>
                                </span>
                            </div>
                        </Link>

                        <Link to="movies" className="headerMovie__item__card">
                            <div className="headerMovie__item__card__poster">
                                <img className='headerMovie__item__card__poster__bg' src={arr[8].Poster} alt="img" />
                                <img className='headerMovie__item__card__poster__icon' src={PlayIcon} alt="icon" />
                            </div>
                            <div className="headerMovie__item__card__info">
                                <p className="headerMovie__item__card__desc">Episode 1</p>
                                <h4 className='headerMovie__item__card__title'>{arr[8].Title}</h4>
                                <p className="headerMovie__item__card__desc">Lorem ipsum dolor sit amet, consec tetur adipis cing elit</p>
                                <span>
                                    <div className="headerMovie__item__date">
                                        <img src={clock} alt="icon" />
                                        <p>1hr 24mins</p>
                                    </div>
                                    <div className="headerMovie__item__date">
                                        <img src={calendar} alt="icon" />
                                        <p>June 2, 2021</p>
                                    </div>
                                </span>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default HeaderMovie;
