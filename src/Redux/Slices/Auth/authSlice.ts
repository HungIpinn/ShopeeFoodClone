import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginUser, TestJson } from '@/Redux/Slices/Auth/authThunk';
import { TestResponse } from '@/types/testJson/testModel';

interface AuthState {
  name: string | null;
  token: string | null;
  loading: boolean;
  TestData: TestResponse | null;
}

const initialState: AuthState = {
  name: null,
  token: null,
  loading: false,
  TestData: null,
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
      //login
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
      })
      //testcase
      .addCase(TestJson.pending, state => {
        state.loading = true;
      })
      .addCase(
        TestJson.fulfilled,
        (state, action: PayloadAction<TestResponse>) => {
          state.loading = false;
          state.TestData = action.payload;
        },
      )
      .addCase(TestJson.rejected, state => {
        state.loading = false;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
