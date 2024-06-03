import '../App.css';
import Head from '../Components/Header';
function Reserve() {
  return (
    <>
<Head/>

<div className='abouts'>
     <h1 >RESERVATION</h1>
    <img src={require('../Images/Bruchetta.jpg')} alt="" />
    <img src={require('../Images/Greek salad.jpg')} alt="" />
    <img src={require('../Images/lemon dessert.jpg')} alt="" />
    <img src={require('../Images/Bruchetta.jpg')} alt="" />
</div>
    </>
  );
}

export default Reserve;
