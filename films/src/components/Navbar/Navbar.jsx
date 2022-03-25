import { useEffect } from "react"
import { NavLink,Link} from "react-router-dom"
import "./Navbar.scss"
import Rasm from './Watchflix.png'
import Photo from './Profile.png'
import Logout from './Frame 11.png'
function Navbar() {
   
function hendelLogOut( token){
    token = localStorage.clear()
   
}


    const activeClassName = "nav__item__link nav__item__link--active"
    const inActiveClassName = "nav__item__link"

    const checkIsActive = (props) => props.isActive ? activeClassName : inActiveClassName
    
    return <header className="header">
      <div className="container navbar">
      <Link to="/Home" className="navbar__logo"> <img src={Rasm}  /></Link>
        <ul className="nav">
            <li className="nav__item">
                <NavLink   className={checkIsActive } to="/home">Home</NavLink>
            </li>
            <li className="nav__item">
                <NavLink className={checkIsActive} to="/Movies">Movies</NavLink>
            </li>
            <li className="nav__item">
                <NavLink className={checkIsActive} to="/Category">Category</NavLink>
            </li>
          
        </ul>
        
        <img    src={Photo} className="profil" />
        <button className="btn2" id="btn" onClick={hendelLogOut}><Link to="/auth"><img  src={Logout} alt="" /></Link></button>
      </div>
    </header>
}



                
        
                
export default Navbar