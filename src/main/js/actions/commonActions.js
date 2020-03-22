export function setTitle(title) {
  return {
    type: 'SET_COMMON_TITLE',
    payload: title
  };
}

export function getCategorys() {
  return {
    type: 'SET_COMMON_CATEGORYS',
    payload: {
        categorys: [
            {categoryId: 1, categoryName: 'グルメ'},
            {categoryId: 2, categoryName: 'レジャー'}
        ]
    }
  };
}

export function setHeaderType(headerType) {
  return {
    type: 'SET_HEADER_TYPE',
    payload: headerType
  };
}

export function setIsSelectedCoupon(isSelectedCoupon) {
  return {
    type: 'SET_IS_SELECTED_COUPON',
    payload: isSelectedCoupon
  };
}


export function resetCommonInfo() {
  return {
    type: 'RESET_COMMON_INFO',
    payload: {}
  };
}
