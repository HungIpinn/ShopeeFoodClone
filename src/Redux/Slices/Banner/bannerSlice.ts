import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BannerResponse } from '@/types/banner/bannerModel';
import { getBanner } from '@/Redux/Slices/Banner/bannerThunk';

interface BannerState {
  bannerData: Record<number, BannerResponse[]>;
  loading: boolean;
}

const initialState: BannerState = {
  bannerData: {},
  loading: false,
};

const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      //banner
      .addCase(getBanner.pending, state => {
        state.loading = true;
      })
      .addCase(getBanner.fulfilled, (state, action) => {
        state.loading = false;

        // lấy id từ request (ví dụ request có field placeid)
        const reqId = action.meta.arg.placeid;

        // lấy danh sách banner cũ theo reqId (nếu có)
        const oldList = state.bannerData[reqId] ?? [];

        const combined = [...oldList, ...action.payload];

        // tạo map để lọc trùng, key = bannerId
        const map = new Map<number, BannerResponse>();
        for (const item of combined) {
          map.set(item.bannerId, item); // nếu trùng thì overwrite bằng item sau
        }

        // cập nhật lại state
        state.bannerData[reqId] = Array.from(map.values());
      })
      .addCase(getBanner.rejected, state => {
        state.loading = false;
      });
  },
});

//export const { getBanner } = bannerSlice.actions;
export default bannerSlice.reducer;
