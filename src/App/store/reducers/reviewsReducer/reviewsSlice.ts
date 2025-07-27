import {FetchStatus} from "../../storeTypes.ts";
import {createSlice} from "@reduxjs/toolkit";
import type {ReviewsScheme} from "./reviewsScheme.ts";
import {fetchReviews} from "./services/fetchReviews.ts";

// const reviewMock = [
//     {
//         personId: '1',
//         username: 'Иванов Иван',
//         comment: 'В extraReducers можно обрабатывать действия из нескольких builder-ов, но сам extraReducers принимает только один колбэк с builder. Однако внутри этого колбэка вы можете обрабатывать действия из разных слайсов или редьюсеров.',
//         createdDate: '21.11.2025',
//         evaluation: 4,
//     },
//     {
//         personId: '2',
//         username: 'Петров Петр',
//         comment: 'В extraReducers можно обрабатывать действия из нескольких builder-ов, но сам extraReducers принимает только один колбэк с builder. Однако внутри этого колбэка вы можете обрабатывать действия из разных слайсов или редьюсеров.',
//         createdDate: '02.11.2025',
//         evaluation: 3,
//     },
//     {
//         personId: '3',
//         username: 'Петров Петр',
//         comment: 'В extraReducers можно обрабатывать действия из нескольких builder-ов, но сам extraReducers принимает только один колбэк с builder. Однако внутри этого колбэка вы можете обрабатывать действия из разных слайсов или редьюсеров.',
//         createdDate: '02.11.2025',
//         evaluation: 3,
//     },
// ]

const initialState: ReviewsScheme = {
    reviews: [],
    loadingReviews: FetchStatus.IDLE,
    errorReviews: null,
};

const reviewsSlice = createSlice<ReviewsScheme>({
    name: "reviews",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviews.pending, (state) => {
                state.loadingReviews = FetchStatus.PENDING;
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.reviews = action.payload;
                // console.log(action.payload);
                // state.reviews = reviewMock;
                state.loadingReviews = FetchStatus.SUCCESS;
            })
            .addCase(fetchReviews.rejected, (state, action) => {
                state.errorReviews = action.payload?.message?.toUpperCase()
                state.loadingReviews = FetchStatus.REJECTED;
                // console.log(action.payload);
                // state.reviews = reviewMock;
                // state.loadingReviews = FetchStatus.SUCCESS;
            });

    },
});

export const reviewsSliceActions = reviewsSlice.actions;
export const reviewsSliceReducer = reviewsSlice.reducer;