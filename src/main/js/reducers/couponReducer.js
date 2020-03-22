export default function reducer(state={
    coupon: {
      resultShops:[],
      selectShop:null
    },
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "SET_RESULT_SHOPS": {
        return {
          ...state,
          coupon: {...state.coupon, resultShops: action.payload.resultShops}
        };
      }
      case "SET_SELECT_SHOP": {
        return {
          ...state,
          coupon: {...state.coupon, selectShop: action.payload}
        };
      }
    }

    return state;
}