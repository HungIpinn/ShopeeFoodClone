import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginUser } from '@/Redux/Slices/Auth/authThunk';

interface AuthState {
  name: string | null;
  token: string | null;
  loading: boolean;
}

const initialState: AuthState = {
  name: null,
  token: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: state => {
      state.name = null;
      state.token = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.name = action.payload.name;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, state => {
        state.loading = false;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
