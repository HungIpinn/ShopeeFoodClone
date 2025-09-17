import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosClient } from '@/api/Client';
import { BannerRequest, BannerResponse } from '@/types/banner/bannerModel';
import { TestResponse } from '@/types/testJson/testModel';
import { BaseResponseBE } from '@/types/baseResponse/baseResponseBE';
import { MenuRequest, MenuResponse } from '@/types/menu/menuModel';

export const getMenu = createAsyncThunk<MenuResponse[], MenuRequest>(
  'menu/get',
  async (data: MenuRequest) => {
    const res = await axiosClient.get<BaseResponseBE<MenuResponse[]>>(
      '/api/Static/GetMenu',
      {
        params: data,
      },
    );
    return res.data.data;
  },
);

// public static int MinBags(int n)
// {
//     int max = n / 5;
//     for (int i = max; i >= 0; i--)
//     {
//         int remain = n - i * 5;
//         if (remain % 3 == 0)
//         {
//             int count3 = remain / 3;
//             return i + count3;
//         }
//     }
//     return -1;
// }
