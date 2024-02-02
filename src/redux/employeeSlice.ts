// models/employeeSlice.ts
import { instance } from '@/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchEmployees = createAsyncThunk('employees/fetchAll', async () => {
  const response = await instance.get('/employees');
  return response.data;
});

export const addEmployee = createAsyncThunk('employees/add', async (employee: any) => {
  const response = await instance.post('/employees', employee);
  return response.data;
});

export const updateEmployee = createAsyncThunk('employees/update', async (employee: any) => {
  const response = await instance.put(`/employees/${employee.id}`, employee);
  return response.data;
});

export const deleteEmployee = createAsyncThunk('employees/delete', async (id: string) => {
  await instance.delete(`/employees/${id}`);
  return id;
});

const employeeSlice = createSlice({
  name: 'employees',
  initialState: { data: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        const index = state.data.findIndex((employee) => employee.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.data = state.data.filter((employee) => employee.id !== action.payload);
      });
  },
});

export default employeeSlice.reducer;
