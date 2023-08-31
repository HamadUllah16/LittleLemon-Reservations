import React from 'react'
import blankPfp from '../assets/blank-profile-picture-973460_1280.png'

function Testimonials() {


    const reviews = [
        { name: 'User 1', image: blankPfp, rating: 5, review: "Best bruchetta in the town!" },
        { name: 'User 2', image: blankPfp, rating: 5, review: "Exceptional!" }
    ]
    const renderReviews = reviews.map((item, index) => {
        return (
            <section key={index} className='col-lg-2 col-md-2 col-sm-4 col-6 secondaryColor3 p-3 m-2 reviewCard'>
                <div className='d-flex'>
                    <h3 className='cardTitle'>Rating: {item.rating}</h3>
                </div>
                <article className='d-flex'>
                    <img className='img-fluid profile rounded-circle' src={item.image} alt='profile' />
                    <p className='m-2 leadText'>{item.name}</p>
                </article>
                <p className='reviewBox my-2 paragraphText'>{item.review}</p>
            </section>
        )
    })
    return (
        <section className='primaryColor2'>
            <section className='container testimonialSection p-3'>
                <h3 className='text-center sectionTitle p-3'>Testimonials</h3>
                <section className='row align-items-center justify-content-center'>
                    {renderReviews}
                </section>
            </section>
        </section>
    )
}

export default Testimonials
