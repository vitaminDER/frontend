import {useAppDispatch, useAppSelector} from "../../../../App/store/storeHooks.ts";
import {getReviews} from "../../../../App/store/reducers/reviewsReducer/selectors.ts";
import {useEffect} from "react";
import {fetchReviews} from "../../../../App/store/reducers/reviewsReducer/services/fetchReviews.ts";
import {DateContainer, ReviewContainer, ReviewInfo, ReviewTextComment, ReviewWrapper} from "./styles.ts";
import {Rating} from "../../Rating/ui/Rating.tsx";
import {useParams} from "react-router-dom";


export const Review = () => {
    const {id} = useParams();
    const bookId = id?.slice(1);
    const dispatch = useAppDispatch();
    const {reviews} = useAppSelector(getReviews);

    const reviewsList = reviews.map((review) => {
        return <ReviewContainer key={review.personId}>
            <ReviewInfo>
                <Rating rating={review.evaluation}/>
                {review.username}
            </ReviewInfo>
            <ReviewTextComment>
                <div>{review.comment}</div>
                <DateContainer>{review.createdDate}</DateContainer>
            </ReviewTextComment>
        </ReviewContainer>
    })

    useEffect(() => {
        dispatch(fetchReviews({bookId}))
    }, []);

    return (
        <ReviewWrapper>
            <>{reviewsList}</>
        </ReviewWrapper>
    );
};
