import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LDPVM } from '@/types/product/product.model';
import { getProductLDP } from './productThunk';

interface LDPState {
  data: Record<string, LDPVM>;
  loading: boolean;
}

const initialState: LDPState = {
  data: {},
  loading: false,
};

const ldpSlice = createSlice({
  name: 'LDP',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //LDP
      .addCase(getProductLDP.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductLDP.fulfilled, (state, action) => {
        var LdpId =
          action.meta.arg.filters.find((x) => x.filterTypeId == 9)?.filterId ??
          '';

        if (LdpId != '' && action.payload != null) {
          if (!state.data[LdpId]) {
            state.data[LdpId] = {} as LDPVM;
          }
          state.data[LdpId].product = action.payload;
        }

        state.loading = false;
      })
      .addCase(getProductLDP.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default ldpSlice.reducer;
