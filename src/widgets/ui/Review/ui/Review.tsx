import {DateContainer, ReviewContainer, ReviewInfo, ReviewTextComment, ReviewWrapper} from "./styles.ts";
import {useAppSelector} from "@/App/store/storeHooks.ts";
import {getReviews} from "@/App/store/reducers/reviewsReducer/selectors.ts";
import {Rating} from "@/widgets/ui/Rating/ui/Rating.tsx";


export const Review = () => {
    const {reviews} = useAppSelector(getReviews);

    const reviewsList = reviews?.content.map((review) => {
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

    return (
        <ReviewWrapper>
            <>{reviewsList}</>
        </ReviewWrapper>
    );
};
