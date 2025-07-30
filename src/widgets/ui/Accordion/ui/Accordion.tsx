import {AccordionCollapsed, AccordionUnCollapsed, PaginationContainer, ReviewContainer} from "./styles.ts";
import {ChangeEvent, useEffect, useState} from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Review} from "../../Review/ui/Review.tsx";
import Pagination from '@mui/material/Pagination';
import {fetchReviews} from "../../../../App/store/reducers/reviewsReducer/services/fetchReviews.ts";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../App/store/storeHooks.ts";
import {getReviews} from "../../../../App/store/reducers/reviewsReducer/selectors.ts";
import {setPagination} from "../../../../App/store/reducers/reviewsReducer/reviewsSlice.ts";
import {FetchStatus} from "../../../../App/store/storeTypes.ts";
import {CircularProgress} from "@mui/material";


export const Accordion = () => {
    const {id} = useParams();
    const bookId = id?.slice(1);
    const dispatch = useAppDispatch();
    const {reviews, loadingReviews} = useAppSelector(getReviews);
    const [isVisible, setIsVisible] = useState(false)
    const visibleHandler = () => {
        setIsVisible(prev => !prev)
    }
    const handlePaginationChange = (event: ChangeEvent<unknown>, value: number) => {
        dispatch(setPagination(value))
    };

    useEffect(() => {
        const request = {
            bookId: bookId,
            pageNumber: reviews.pageNumber,
            pageSize: reviews.pageSize,

        }
        if (isVisible) {
            dispatch(fetchReviews(request))
        }
    }, [bookId, reviews.pageNumber, isVisible, reviews.pageSize]);
    return (
        <ReviewContainer>
            <AccordionCollapsed onClick={visibleHandler}>
                <div>Отзывы</div>
                <>{loadingReviews === FetchStatus.PENDING && <CircularProgress size="20px"/>}</>
                <>{isVisible ? <ExpandLessIcon/> :
                    <ExpandMoreIcon/>}</>
            </AccordionCollapsed>
            <>{isVisible && loadingReviews === FetchStatus.SUCCESS ? <AccordionUnCollapsed>
                <Review/>
                <PaginationContainer>
                    <Pagination count={reviews.totalPages} page={reviews.pageNumber}
                                onChange={handlePaginationChange}
                                size="small"/>
                </PaginationContainer>
            </AccordionUnCollapsed> : null}</>
        </ReviewContainer>
    );

};
