import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
function Main(){
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
    useEffect(()=>{
        console.log('refresh')
    });
    return(
       <div className='main'>
        <section className='hero'>
            <div className='hero-1'>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are  a family-owned Mediterranean restaurant, that blends traditional recipes with a modern twist.</p>
                <button><Link to="/Reservation">Reserve A Table</Link></button>
            </div>

        <img src={require('../Images/restauranfood.jpg')} alt="" />
        </section>

        <section className='highlights'>
            <h1>This Week Specials For {date}/{month}/{time}</h1>
            <button><Link to='/Order'>Online Menu</Link></button>
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

        <section className='testimonials'>
            <div>
              <h1>Testimonials</h1>
            </div>

           <div className='profile'>
               <div>
                  <img src={require('../Images/Dominic_profile_2023-962x1024.webp')}/>
                  <h3>Sarah Thompson</h3>
                  <span>★★★★★</span><br /><br />
                  <p>Great food and lovely very helpful staff, would highly recommend. Excellent experience all around, they maintain cleanliness to a very high standard.</p>
               </div>

               <div>
               <img src={require('../Images/photo-gallery-img-02-circle.jpg')}/>
                  <h3>David Brown</h3>
                  <span>★★★★★</span><br /><br />
                  <p>Little Lemon Restaurant is a gem! The lemon herb steak was perfectly cooked and full of flavor. The staff made the whole experience even better with their friendly service.</p>

               </div>

               <div>
               <img src={require('../Images/Machali Jameson - Headshot (2).jpg')}/>
                  <h3>Michael Johnson</h3>
                  <span>★★★★★</span><br /><br />
                  <p>Great food and lovely very helpful staff, would highly recommend. Excellent experience all around, they maintain cleanliness to a very high standard.</p>

               </div>
            </div>
        </section>

       </div>
    )
}
export default Main;

