import React,{useContext} from 'react';
import {AppContext} from '../../Context';

export default function Reviews() {
    const {reviewsContext}  = useContext(AppContext);
    //eslint-disable-next-line
	const [ reviews, setReviews ] = reviewsContext;
    return (
        <div>
            <h1>hii</h1>

            {reviews.map(review => {
                return(
                    <li>{review.name[0]}</li>
                )
            })}
        </div>
    )
}
