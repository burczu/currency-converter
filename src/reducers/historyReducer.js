const initialState = {
  loading: false,
  error: false,
  myCurrency: 'EUR',
  otherCurrency: '',
  startDate: undefined,
  endDate: undefined
};

export default function historyReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
