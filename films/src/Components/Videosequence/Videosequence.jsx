import React from 'react';
import Videoitem from '../VideoItem/VideoItem';
import { Link } from 'react-router-dom';
import './Videosequence.scss';

const Videosequence = ({ arr, title }) => {
    return (
        <div className='videosequence'>
            
            <div className="container">
                <div className="videosequence__title">
                    <h3>{title}</h3>
                    <Link to={`/category/${title}`}>View More</Link>
                </div>



                <div className="videosequence__items">
                    {
                        arr ? arr.map((item, index) => <Videoitem key={index} item={item} />) : <></>
                    }
                </div>


            </div>
        </div>
    );
}

export default Videosequence;
