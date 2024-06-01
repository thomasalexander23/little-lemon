function NavBar(){
    return(
<div className="little">
<div className='one'>
  <h1>Little Lemon</h1> 
  <h3>Chicago</h3>
  <p>We are  a family-owned Mediterranean restaurant ,that blends traditional recipes with a modern twist.</p>
<button>Reserve Table</button>
</div>
<div className='two'>
  <img src={require('../Images/restauranfood.jpg')} alt="" />
</div>
</div>
    )
}
export default NavBar;