/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TIME_DISC = 50;
  const MIDL_TIME_DISC = 20;
  const PRICE = 40;
  const LONG_TIME = 7;
  const MIDL_TIME = 3;

  if (days >= LONG_TIME) {
    return PRICE * days - LONG_TIME_DISC;
  } else if (days >= MIDL_TIME) {
    return PRICE * days - MIDL_TIME_DISC;
  } else {
    return PRICE * days;
  }
}

module.exports = calculateRentalCost;
