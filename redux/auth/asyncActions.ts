import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../core/axios";

export const fetchLogin = createAsyncThunk('auth/fetchLogin', async (params: any) => {
  const { data } = await axios.post('/users/login', params);
  console.log(data);
  
  return data;
});

export const fetchSignup = createAsyncThunk('auth/fetchSignup', async (params: any) => {
  const { data } = await axios.post('/users/signup', params);
  return data;
});