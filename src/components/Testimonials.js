import React from 'react'

function Testimonials() {
    const reviews = [
        { name: "Joe", image: "", rating: "5.0", review: "Exceptional!" },
        { name: "Joe", image: "", rating: "5.0", review: "Exceptional!" }
    ]
    const renderReviews = reviews.map((item) => {
        return (
            <section className='secondaryColor3 p-3 m-2 reviewCard'>
                <h3 className='cardTitle'>Rating: {item.rating}</h3>
                <article className='d-flex'>
                    <img className='px-2' src={item.image} alt='profile' />
                    <p className='leadText'>{item.name}</p>
                </article>
                <p className='paragraphText'>Feedback: {item.review}</p>
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
