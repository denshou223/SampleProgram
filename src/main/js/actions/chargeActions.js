export function chargeExecution(chargeAmount) {
  return {
    type: "CHARGE_USER_CHARGE_BALANCE",
    payload: chargeAmount
  };
}