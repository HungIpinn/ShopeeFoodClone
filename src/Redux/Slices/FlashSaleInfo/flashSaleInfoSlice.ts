import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFlashSaleInfoDto } from '@/types/Flashsale/FlashSaleInfo.Model';
import { getFsInfo } from './flashSaleInfoThunk';

interface FsInfoState {
  data: IFlashSaleInfoDto[] | null;
  loading: boolean;
}

const initialState: FsInfoState = {
  data: null,
  loading: false,
};

const fsInfoSlice = createSlice({
  name: 'FsInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //FsInfo
      .addCase(getFsInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFsInfo.fulfilled, (state, action) => {
        // lấy id từ request (ví dụ request có field placeid)
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getFsInfo.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default fsInfoSlice.reducer;
