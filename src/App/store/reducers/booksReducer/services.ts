import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../../../utils/api/api.ts";
import {QUERY} from "../../backend/constants.ts";
import type {IBooks} from "./booksSheme.ts";
import type {RequestError} from "../../storeTypes.ts";
import type {AxiosError} from "axios";

export interface FetchBooksRequest {
    all: string;

}

export const fetchBooks = createAsyncThunk<IBooks[], void, {
    rejectValue: RequestError
}>("fetchBooks", async (_, thunkAPI) => {
    try {
        const response = await api.get<IBooks[]>(QUERY.getBooksUrl);
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