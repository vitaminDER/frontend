import {createAsyncThunk} from "@reduxjs/toolkit";
import type {AxiosError} from "axios";
import {RequestError} from "@/App/store/storeTypes.ts";
import {api} from "@/utils/api/api.ts";
import {QUERY} from "@/App/store/backend/constants.ts";
import {Reviews} from "@/App/store/reducers/reviewsReducer/reviewsScheme.ts";

interface RequestReviews {
    bookId: string | undefined;
    pageNumber: number;
    pageSize: number;
}

export const fetchReviews = createAsyncThunk<Reviews, RequestReviews, {
    rejectValue: RequestError
}>("fetchReviews", async (params, thunkAPI) => {
    try {
        const response = await api.get<Reviews[]>(QUERY.getReviewsUrl, {params});
        // const response = await api.get<Reviews[]>(`${QUERY.getReviewsUrl}/${id}`);
        return response.data;
    } catch (e) {
        const error = e as AxiosError<RequestError>
        if (error.response?.status === 400 && error.response?.data) {
            return thunkAPI.rejectWithValue(error?.response?.data)
        }
        return thunkAPI.rejectWithValue({
            code: 111,
            message: error.response?.data.message || 'Не удалось получить список книг',
            errorCode: '',
        });

    }
});