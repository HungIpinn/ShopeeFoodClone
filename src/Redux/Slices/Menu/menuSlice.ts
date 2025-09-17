import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getMenu } from '@/Redux/Slices/Menu/menuThunk';
import { MenuResponse } from '@/types/menu/menuModel';

interface MenuState {
  data: MenuResponse[] | null;
  loading: boolean;
}

const initialState: MenuState = {
  data: null,
  loading: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //menu
      .addCase(getMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMenu.fulfilled, (state, action) => {
        // lấy id từ request (ví dụ request có field placeid)
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getMenu.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default menuSlice.reducer;
