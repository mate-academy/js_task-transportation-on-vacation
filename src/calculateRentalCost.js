/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDayRent = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const numberOfDays = days;

  if (numberOfDays >= LONG_TERM) {
    return oneDayRent * numberOfDays - 50;
  } else if (numberOfDays <= LONG_TERM && numberOfDays >= SHORT_TERM) {
    return oneDayRent * numberOfDays - 20;
  } else {
    return oneDayRent * days;
  }
}

module.exports = calculateRentalCost;
