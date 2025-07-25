import {createAsyncThunk} from "@reduxjs/toolkit";
import type {RequestError} from "../../storeTypes.ts";
import {api} from "../../../../utils/api/api.ts";
import {QUERY} from "../../backend/constants.ts";
import type {AxiosError} from "axios";
import type {BookItem} from "./bookItemSheme.ts";

interface RequestBook {
    id: string | undefined;
}

export const fetchItemBook = createAsyncThunk<BookItem, RequestBook, {
    rejectValue: RequestError
}>("fetchItemBook", async (params, thunkAPI) => {
    try {
        // const response = await api.get<BookItem>(`${QUERY.getItemBookUrl}${params.id}`);
        const response = await api.get<BookItem>(QUERY.getItemBookUrl, {params});
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