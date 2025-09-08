import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from '@/api/Client';

export const loginUser = createAsyncThunk(
  'user/login',
  async (data: { username: string; password: string }) => {
    const res = await axiosClient.post('/auth/login', data);
    return res; // { name, token }
  },
);
