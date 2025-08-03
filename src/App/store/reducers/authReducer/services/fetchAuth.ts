import {createAsyncThunk} from "@reduxjs/toolkit";
import type {AxiosError} from "axios";
import {RequestError} from "@/App/store/storeTypes.ts";
import {api} from "@/utils/api/api.ts";
import {QUERY} from "@/App/store/backend/constants.ts";

export interface RequestAuth {
    login: string;
    password: string;
}

interface ResponseAuth {
    isAuth: boolean;
}

export const fetchAuth = createAsyncThunk<ResponseAuth, RequestAuth, {
    rejectValue: RequestError
}>("fetchAuth", async (params, thunkAPI) => {
    try {
        const response = await api.post<ResponseAuth>(QUERY.getItemBookUrl, params);
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