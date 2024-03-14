import { Link } from 'react-router-dom'

import reviews from "../../data/reviews";

import { IoStar } from "react-icons/io5";

function ReviewsPreview() {

    const shuffledHomeReviews = reviews.sort((a, b) => 0.5 - Math.random())

    return(
        <div className='home-reviews'>
            <h2 className='center-text'>
                <span className='home-reviews--title'>Reviews</span>
                <span className='home-reviews__divider--long'></span>
                <span className='home-reviews--stars'>
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                </span>
                <span className='home-reviews__divider--long'></span>
                {/* Review button links */}
                <div className='home-reviews__button-box'>
                    <a className='button__review-link' href='https://drewford.dev' target='_blank'>Leave Feedback</a>
                    <Link className='button__review-link' to='reviews'>All Reviews</Link>
                </div>

            </h2>
                
            <div className='home-reviews__container'>
                {shuffledHomeReviews.slice(0, 3).map((review)=> {
                    return(
                        <div className='home-reviews__card' key='review.id'>
                            <div className='home-reviews__card--flex'>
                                <div className='home-reviews__card--name'>
                                {review.name}</div>
                                <span>                    
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar /></span>
                            </div>
                            <span className='home-reviews__divider--short'></span>
                            <div className='home-reviews__card--message'>
                                {review.message.length > 350 ?
                                    <>"{review.message.substring(0, 350) + '...'}"</>
                                    :
                                    <>"{review.message}"</>
                                }</div>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default ReviewsPreview;