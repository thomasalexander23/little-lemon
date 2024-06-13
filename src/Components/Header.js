import '../App.css';
import { Link } from 'react-router-dom';
function Head(){
    return(
        <div className='logo'>
          <div>
         <Link to='/Home'><img src={require('../Images/Logo.jpg')} alt='images' /></Link>
         </div>
         <nav>
          <ul>
            <li><Link to='/Home'>Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Menu">Menu</Link></li>
            <li><Link to="/Reservation">Reservation</Link></li>
            <li><Link to="/Order">Order Online</Link></li>
            <li><Link to="/Login">Login</Link></li>
          </ul>
        </nav>
         </div>
    )
}
export default Head;