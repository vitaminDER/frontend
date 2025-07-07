import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../utils/api/api.ts";

export const fetchPost = createAsyncThunk("fetchPost", async () => {
  const response = await api.get("posts");
  return response.data;
});
