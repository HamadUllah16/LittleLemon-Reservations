import React from 'react'
import GreekSalad from "../assets/greeksalad.jpg"
import Bruchetta from "../assets/bruchetta.jpg"
import LemonDessert from "../assets/lemon dessert.jpg"
import Delivery from "../assets/delivery-removebg-preview.png"


function Dishes() {
  const dishCards = [
    { name: "Greek Salad", price: 12.99, descrption: "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garllic and rosemary croutons.", image: GreekSalad },
    { name: "Bruchetta", price: 5.99, descrption: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil", image: Bruchetta },
    { name: "Lemon Dessert", price: 5.00, descrption: "This comes straight from grandma's recipe book, every last ingredient has been resourced and is as authentic as can be imagined.", image: LemonDessert }
  ]
  const renderDishes = dishCards.map((item, index) => {
    return (
      <article key={index} className='dishCard col-lg-4 col-md-4 p-0 col-sm-4 mx-2 secondaryColor3 border shadow'>
        <img className='dishImage' src={item.image} alt='dish pic' />
        <div className='d-flex justify-content-between px-3 py-3'>
          <h3 className='cardTitle'>{item.name}</h3>
          <h3 className='highlightText'>${item.price}</h3>
        </div>
        <p className='px-3 paragraphText dishDescription'>{item.descrption}</p>
        <h3 className='px-3 pb-3 cardTitle'>Order for delivery<img className='deliveryIcon' src={Delivery} alt='delivery' /></h3>
      </article>)
  })

  return (
    <section className='specialsSection secondaryColor3 p-sm-5 py-4'>
      <section className='container'>
        <article>
          <h1 className='sectionTitle'>Specials</h1>
        </article>
        <article className='row justify-content-center'>
          {renderDishes}
        </article>
      </section>
    </section>
  )
}

export default Dishes
