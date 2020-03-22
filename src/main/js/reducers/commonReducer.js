export default function reducer(state={
    common: {
      title: null,
      categorys: [],
      headerType: 1,
      isSelectedCoupon: false
    },
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "SET_COMMON_TITLE": {
        return {
          ...state,
          common: {...state.common, title: action.payload}
        };
      }
      case "SET_COMMON_CATEGORYS": {
        return {
          ...state,
          common: {...state.common, categorys: action.payload.categorys}
        };
      }
      case "SET_HEADER_TYPE": {
        return {
          ...state,
          common: {...state.common, headerType: action.payload}
        };
      }
      case "SET_IS_SELECTED_COUPON": {
        return {
          ...state,
          common: {...state.common, isSelectedCoupon: action.payload}
        };
      }
      case "RESET_COMMON_INFO": {
        return {
          ...state,
          common: {...state.common, isSelectedCoupon: false}
        };
      }
    }

    return state;
}