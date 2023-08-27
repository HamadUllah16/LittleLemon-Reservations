import React from 'react'
import Star from './Buttons/Icons/Star'

function Testimonials() {
    const reviews = [
        { name: "Joe", image: "https://xsgames.co/randomusers/avatar.php?g=male", rating: 5, review: "Exceptional!" },
        { name: "Joe", image: "https://xsgames.co/randomusers/avatar.php?g=male", rating: 5, review: "Exceptional!" }
    ]
    const renderReviews = reviews.map((item,index) => {
        return (
            <section key={index} className='secondaryColor3 p-3 m-2 reviewCard'>
                <div className='d-flex'>
                    <h3 className='cardTitle'>Rating: {item.rating}</h3>
                    <Star />
                </div>
                <article className='d-flex'>
                    <img className='img-fluid profile rounded-circle' src={item.image} alt='profile' />
                    <p className='m-2 leadText'>{item.name}</p>
                </article>
                <p className='my-2 paragraphText'>Feedback: {item.review}</p>
            </section>
        )
    })
    return (
        <section className='primaryColor2'>
            <section className='container testimonialSection p-3'>
                <h3 className='text-center sectionTitle p-3'>Testimonials</h3>
                <section className='d-flex align-items-center justify-content-center'>
                    {renderReviews}
                </section>
            </section>
        </section>
    )
}

export default Testimonials
