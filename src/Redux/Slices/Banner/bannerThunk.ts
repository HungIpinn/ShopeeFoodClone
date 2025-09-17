import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosClient } from '@/api/Client';
import { BannerRequest, BannerResponse } from '@/types/banner/bannerModel';
import { TestResponse } from '@/types/testJson/testModel';
import { BaseResponseBE } from '@/types/baseResponse/baseResponseBE';

export const getBanner = createAsyncThunk<BannerResponse[], BannerRequest>(
  'banner/get',
  async (data: BannerRequest) => {
    const res = await axiosClient.get<BaseResponseBE<BannerResponse[]>>(
      '/api/Banner/GetBannerBySite',
      {
        params: data,
      },
    );
    return res.data.data;
  },
);
