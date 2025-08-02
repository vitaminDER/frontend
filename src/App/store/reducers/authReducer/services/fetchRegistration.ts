import {createAsyncThunk} from "@reduxjs/toolkit";
import type {RequestError} from "../../../storeTypes.ts";
import {api} from "../../../../../utils/api/api.ts";
import {QUERY} from "../../../backend/constants.ts";
import type {AxiosError} from "axios";

export interface RequestRegistration {
    login: string;
    email: string;
    password: string;
}

interface ResponseRegistration {
    isRegistration: boolean;
}

export const fetchRegistration = createAsyncThunk<ResponseRegistration, RequestRegistration, {
    rejectValue: RequestError
}>("fetchRegistration", async (params, thunkAPI) => {
    try {
        const response = await api.post<ResponseRegistration>(QUERY.postAuthUrl, params);
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