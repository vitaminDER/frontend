import {FetchStatus, Nullable} from "../../storeTypes.ts";

export interface Reviews {
    personId: string;
    username: string;
    comment: string;
    createdDate: string;
    evaluation: number;
}

export interface ReviewsScheme {
    reviews: Reviews[];
    loadingReviews: FetchStatus;
    errorReviews: Nullable<string>
}