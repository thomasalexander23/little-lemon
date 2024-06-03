import '../App.css';
import Head from '../Components/Header';
function Menu() {
  return (
    <>
<Head/>

<div className='abouts'>
     <h1 >MENU</h1>
    <img src={require('../Images/Bruchetta.jpg')} alt="" />
    <img src={require('../Images/Greek salad.jpg')} alt="" />
    <img src={require('../Images/lemon dessert.jpg')} alt="" />
    <img src={require('../Images/Bruchetta.jpg')} alt="" />
</div>
    </>
  );
}

export default Menu;
