import {createAsyncThunk} from "@reduxjs/toolkit";
import type {RequestError} from "../../../storeTypes.ts";
import {api} from "../../../../../utils/api/api.ts";
import {QUERY} from "../../../backend/constants.ts";
import type {AxiosError} from "axios";
import type {Reviews} from "../reviewsScheme.ts";

// interface RequestReviews {
//     id: string | undefined;
// }

export const fetchReviews = createAsyncThunk<Reviews[], string, {
    rejectValue: RequestError
}>("fetchReviews", async (id, thunkAPI) => {
    try {
        // const response = await api.get<Reviews[]>(QUERY.getReviewsUrl, {params});
        const response = await api.get<Reviews[]>(`${QUERY.getReviewsUrl}/${id}`);
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