import { Link } from 'react-router-dom';
import { useState } from 'react';
function Online(){
    const day = new Date();
    const kene = day.getDay();
    const time = day.getFullYear();
    const month = day.getMonth() + 1;
    let kenes;
    if(kene === 1){
              kenes= "Monday"
    }
    else if(kene === 2){
        kenes = "Tusday"
    }
    else if(kene === 3){
        kenes = "Wednesday"
    }
    else if(kene === 4){
        kenes = "Thursday"
    }
    else if(kene === 5){
        kenes = "Friday"
    }
     else if(kene === 6){
        kenes = "Satrday"
    }
    else if(kene === 0){
        kenes = "Sunday"
    }
    const [date,setdate]=useState(`${kenes}`);
    return(
      <div className='online'>
        <section className='highlights'>
            <h1>This Week Specials For {date}/{month}/{time}</h1>
            <section className='cards'>
                <div>
                <img src={require('../Images/Greek salad.jpg')} alt="" />
                <div className='menu'>
                    <h3>Greek Salad</h3>
                    <h5></h5>
                    <h5>$ 12.99</h5>
                </div>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic. </p>
                <h4>Order a delivery </h4>
                </div>

                <div>
                <img src={require('../Images/Bruchetta.jpg')} alt="" />
                <div className='menu'>
                    <h3>Bruchetta</h3>
                    <h5 style={{opacity: "0"}}>hell</h5>
                    <h5>$ 5.99</h5>
                </div>
                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                <h4>Order a delivery </h4>
                </div>

                <div>
                <img src={require('../Images/lemon dessert.jpg')} alt="" />
                <div className='menu'>
                    <h3>Lemon Dessert</h3>
                    <h5>$ 5.00</h5>
                </div>
                <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                <h4>Order a delivery </h4>
                </div>
            </section>
        </section>

       </div>
    )
}
export default Online;

