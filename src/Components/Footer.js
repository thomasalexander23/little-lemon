import { Link } from 'react-router-dom';
import PageIcon from './Icons/PageIcon';
import InstaIcon from './Icons/InstaIcon';
import Pinterest from './Icons/Pinterest';
import SnapIcon from './Icons/SnapIcon';
import YelpIcon from './Icons/YelpIcon';
function Footer(){
    return(
          <footer className="footer">
            <div className='footer-logo'>
                   <img src={require('../Images/Little Lemon Logo colors.2c859235d6c57bb54176.png')} alt="" />
            </div>
            <div className='footer-text'>
                  <div>
                    <h4>Menu</h4>
                        <li> </li>
                        <li><Link to='/Home'>Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Menu">Menu</Link></li>
                        <li><Link to="/Reservation">Reservation</Link></li>
                        <li><Link to="/Order">Order Online</Link></li>
                        <li><Link to="/Login">Login</Link></li>
                  </div>
                  <div>
                     <h4>Contact</h4>
                     <li></li>
                     <li>Chicago, Illinois, USA</li>
                     <li>312-938-7229</li>
                     <li>hello@littlelemon.com</li>
                  </div>
                  <div>
                  <h4>Social Media Links</h4><div className='social'>
                  <a href="http://www.facebook.com"><PageIcon/></a>
                  <a href="http://www.instagram.com"><InstaIcon/></a>
                  <a href="http://www.pinterest.com"><Pinterest/></a>
                  <a href="http://www.snapshot.com"><SnapIcon/></a>
                  <a href="http://www.yelp.com"><YelpIcon/></a>
                  </div>
          </div>
            </div>
          </footer>
    )
}
export default Footer;