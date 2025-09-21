import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosClient } from '@/api/Client';
import { BannerRequest, BannerResponse } from '@/types/banner/bannerModel';
import { TestResponse } from '@/types/testJson/testModel';
import { BaseResponseBE } from '@/types/baseResponse/baseResponseBE';
import { MenuRequest, MenuResponse } from '@/types/menu/menuModel';
import { GetproductLdpReqs, ProductLDPVM } from '@/types/product/product.model';

export const getProductLDP = createAsyncThunk<ProductLDPVM, GetproductLdpReqs>(
  'product/GetProductGroupLDP',
  async (data: GetproductLdpReqs) => {
    console.log('<<<<< Hung Log:', data);
    const res = await axiosClient.post<BaseResponseBE<ProductLDPVM>>(
      '/api/LandingPage/GetProductGroupLDP',
      data,
    );
    return res.data.data;
  },
);
