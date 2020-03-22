import { push } from 'connected-react-router'

export function payConfirmAction() {
  return (dispatch)=>{
    dispatch({
        type: "FETCH_PAY_FULFILLED",
        payload: {
          usageAmount: 4000,
          paymentAmount: 3200,
          coupons: [
            {
                couponName: 'クーポン1',
                couponValue: 300
            },
            {
                couponName: 'クーポン2',
                couponValue: 500
            }
          ]
        }
    });
    dispatch(push('/payConfirm'));
  };
}

export function payExecustionAction() {
  return (dispatch)=>{
    dispatch({
        type: "SET_USER_CHARGE_BALANCE",
        payload: {
          chargeBalance: 16800,
        }
    });
    dispatch(push('/payFinish'));
  };
}
