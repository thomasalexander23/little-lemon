import '../App.css';
function Head(){
    return(
        <div className='logo'>
         <img src={require('../Images/Logo.jpg')}/>
         <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </nav>
         </div>
    )
}
export default Head;