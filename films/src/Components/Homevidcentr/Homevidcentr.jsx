import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import PlayBtn from "../../img and vidyo/svg/PlayButton.svg";
import './Homevidcenter.scss'

const Homevidcenter = ({ arr }) => {
    const imgRef = useRef()
    return (
        <div className='Homevidcenter'>
            <img className='Homevidcenter__bg' ref={imgRef} src={arr[0].Poster} alt="img" />
            <div className="container">
                <div className="Homevidcenter__film">
                    <Link to="/movies">
                        <img src={PlayBtn} alt="icon" />
                    </Link>
                    <div className="Homevidcenter__info">
                        <h1 className='Homevidcenter__title'>{arr[0].Title}</h1>
                        <p className='Homevidcenter__desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <p className='Homevidcenter__detalist'>Genre : Adventure</p>
                        <p className='Homevidcenter__detalist'>Duration : 2 hr 45 mins</p>
                        <p className='Homevidcenter__detalist'>Ratings : 4.5</p>
                    </div>
                </div>

                <div className="Homevidcenter__trailer">
                    <h4>Trailers</h4>
                    <div className="Homevidcenter__cards">
                        <div className="card" >
                            <img src={arr[1].Poster} alt="img" />
                        </div>
                        <div className="card" >
                            <img src={arr[2].Poster} alt="img" />
                        </div>
                        <div className="card" >
                            <img src={arr[3].Poster} alt="img" />
                        </div>
                        <div className="card" >
                            <img src={arr[4].Poster} alt="img" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Homevidcenter;
