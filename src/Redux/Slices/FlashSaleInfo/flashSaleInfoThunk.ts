import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosClient } from '@/api/Client';
import { BaseResponseBE } from '@/types/baseResponse/baseResponseBE';
import {
  IFlashSaleInfoDto,
  IFlashSaleInfoReqs,
} from '@/types/Flashsale/FlashSaleInfo.Model';

export const getFsInfo = createAsyncThunk<
  IFlashSaleInfoDto[],
  IFlashSaleInfoReqs
>('LandingPage/GetGroupsByProgramid', async (data: IFlashSaleInfoReqs) => {
  const res = await axiosClient.get<BaseResponseBE<IFlashSaleInfoDto[]>>(
    '/api/LandingPage/GetGroupsByProgramid',
    {
      params: data,
    },
  );
  return res.data.data;
});
