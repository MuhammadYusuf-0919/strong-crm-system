// models/employeeSlice.ts
import { instance } from '@/api';
import { FormData } from '@/types';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export const fetchEntity = createAsyncThunk<FormData[], string>(
  'crud/fetchAll',
  async (entityName: string) => {
    const response = await instance.get(`/${entityName}`);
    return response.data;
  }
);

export const addEntity = createAsyncThunk<FormData, { entityName: string; data: any }>(
  'crud/add',
  async ({ entityName, data }) => {
    const response = await instance.post(`/${entityName}`, data);
    return response.data;
  }
);

export const updateEntity = createAsyncThunk<FormData, { entityName: string; data: any }>(
  'crud/update',
  async ({ entityName, data }) => {
    const response = await instance.patch(`/${entityName}/${data.id}`, data);
    return response.data;
  }
);

export const deleteEntity = createAsyncThunk<string, { entityName: string; id: string }>(
  'crud/delete',
  async ({ entityName, id }) => {
    await instance.delete(`/${entityName}/${id}`);
    return id;
  }
);

interface CrudState {
  data: FormData[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CrudState = {
  data: [],
  status: 'idle',
  error: null,
};

const crudSlice = createSlice({
  name: 'crud',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEntity.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEntity.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchEntity.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'An error occurred';
      })
      .addCase(addEntity.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateEntity.fulfilled, (state, action) => {
        const index = state.data.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(deleteEntity.fulfilled, (state, action) => {
        state.data = state.data.filter((item) => item.id !== action.payload);
      });
  },
});

export default crudSlice.reducer;
