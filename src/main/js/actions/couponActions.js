import { push } from 'connected-react-router'

export function searchCoupon(categoryId) {
  return (dispatch)=>{
          if(categoryId === 1){
            dispatch({
                type: "SET_RESULT_SHOPS",
                payload: {
                  resultShops: [
                    {
                        shopName: 'グルメ店舗1',
                        shopAddress: 'グルメ住所1',
                        coupons: [
                          {
                            couponName: 'グルメクーポン1',
                            couponValue: 100
                          }
                        ]
                    },
                    {
                        shopName: 'グルメ店舗2',
                        shopAddress: 'グルメ住所2',
                        coupons: [
                          {
                            couponName: 'グルメクーポン2',
                            couponValue: 200
                          }
                        ]
                    },
                  ]
                }
            });
          } else {
            dispatch({
                type: "SET_RESULT_SHOPS",
                payload: {
                  resultShops: [
                    {
                        shopName: 'レジャー店舗1',
                        shopAddress: 'レジャー住所1',
                        coupons: [
                          {
                            couponName: 'レジャークーポン1',
                            couponValue: 300
                          }
                        ]
                    },
                    {
                        shopName: 'レジャー店舗2',
                        shopAddress: 'レジャー住所2',
                        coupons: [
                          {
                            couponName: 'レジャークーポン2',
                            couponValue: 400
                          }
                        ]
                    },
                  ]
                }
            });
          }
    };
}

export function selectCoupon(coupon) {
  return (dispatch)=>{
    dispatch({
      type: "SET_SELECT_SHOP",
      payload: coupon
    });
    dispatch(push('/couponDetail'));
  };
}
