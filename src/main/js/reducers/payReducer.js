export default function reducer(state={
    pay: {
      usageAmount: null,
      coupons: []
    },
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_PAY_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          pay: action.payload
        };
      }
    }

    return state;
}