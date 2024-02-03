// configSlice.ts
import { ConfigState } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ConfigState = {
  entity: '',
  captions: [],
  create: false,
  update: false,
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setConfig: (state, action: PayloadAction<ConfigState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setConfig } = configSlice.actions;
export default configSlice.reducer;
