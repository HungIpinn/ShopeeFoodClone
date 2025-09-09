import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosClient } from '@/api/Client';
import { TestRequest, TestResponse } from '@/types/testJson/testModel';

export const loginUser = createAsyncThunk(
  'user/login',
  async (data: { username: string; password: string }) => {
    const res = await axiosClient.post('/auth/login', data);
    return res; // { name, token }
  },
);

export const TestJson = createAsyncThunk(
  'auth/test',
  async (data: TestRequest) => {
    const res = await axiosClient.post<TestResponse>('/posts', data);
    return res.data;
  },
);
