import { useEffect } from 'react'

import reviews from '../data/reviews'

import { FaStar } from "react-icons/fa";

function Reviews() {

    const shuffledReviews = reviews.sort((a, b) => 0.5 - Math.random());

    useEffect(() => {
        window.scrollTo({top: 0, left: 0})
      }, [])

    return(
        <div className='reviews'>
            {/* header */}
            <div className='reviews__header'>
                <h1>
                    <span className='reviews__header--primary'>EYE CARE Reviews</span>
                    <span className='reviews__header--secondary'>Learn why so many patients keep coming back</span>
                </h1>    
            </div>

            {/* Reviews */}
            <div className='reviews__container'>
                {shuffledReviews.map((reviewsObj) => {
                    return(
                        <div className='reviews__card'>
                            <div className='reviews__card-name'>
                                {reviewsObj.name}</div>
                            <div className='reviews__card-message'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <br />
                                "{reviewsObj.message}"</div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Reviews;