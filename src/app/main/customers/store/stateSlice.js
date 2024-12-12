import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const customersAdapter = createEntityAdapter({});

export const { selectAll: selectCustomers, selectById: selectCustomerById } =
  customersAdapter.getSelectors((state) => state.customers.state);

const stateSlice = createSlice({
  name: 'customers/state', // Remove '/list' to avoid confusion
  initialState: customersAdapter.getInitialState({
    selectedCustomer: '', // Properly initialize this field
  }),
  reducers: {
    setSelectedCustomer: {
      reducer: (state, action) => {
        state.selectedCustomer = action.payload; // Set selected customer
      },
      prepare: (id) => ({ payload: id || '' }), // Prepare a payload
    },
  },
  extraReducers: {
    // Handle async actions if needed
  },
});

export const { setSelectedCustomer } = stateSlice.actions;

// Updated selector to access state properly
export const getSelectedCustomer = ({ customers }) => customers.state.selectedCustomer;

export default stateSlice.reducer;
