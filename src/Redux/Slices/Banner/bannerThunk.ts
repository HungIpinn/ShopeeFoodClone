import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosClient } from '@/api/Client';
import { BannerRequest, BannerResponse } from '@/types/banner/bannerModel';
import { TestResponse } from '@/types/testJson/testModel';

export const getBanner = createAsyncThunk<BannerResponse[], BannerRequest>(
  'banner/get',
  async (data: BannerRequest) => {
    const res = await axiosClient.post<BannerResponse[]>('/posts', data);
    return res.data;
  },
);
