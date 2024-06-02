function Main(){
    return(
       <div className='main'>
        <section className='hero'>
            <div className='hero-1'>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are  a family-owned Mediterranean restaurant, that blends traditional recipes with a modern twist.</p>
                <button>Reserve A Table</button>
            </div>

        <img src={require('../Images/restauranfood.jpg')} alt="" />
        </section>

        <section className='highlights'>
            <h1>This Week Specials!</h1>
            <button>Online Menu</button>
            <section className='cards'>
                <div>
                <img src={require('../Images/Greek salad.jpg')} alt="" />
                <div className='menu'>
                    <h3>Greek Salad</h3>
                    <h5>$ 12.99</h5>
                </div>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic. </p>
                <h4>Order a delivery </h4>
                </div>

                <div>
                <img src={require('../Images/Bruchetta.jpg')} alt="" />
                <div className='menu'>
                    <h3>Bruchetta</h3>
                    <h5>$ 5.99</h5>
                </div>
                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                <h4>Order a delivery </h4>
                </div>

                <div>
                <img src={require('../Images/lemon dessert.jpg')} alt="" />
                <div className='menu'>
                    <h3>Bruchetta</h3>
                    <h5>$ 5.00</h5>
                </div>
                <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                <h4>Order a delivery </h4>
                </div>
            </section>
        </section>

        <section className='testimonials'>
            <h1>Testimonials</h1>
        </section>

        <section className='about'>
            <h1>About</h1>
        </section>
       </div>
    )
}
export default Main;

