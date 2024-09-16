/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dayOfTrip = days;
  const carDayRent = 40;
  const smallDayDiscount = 20;
  const bigDayDiscount = 50;
  const countSum = carDayRent * dayOfTrip;

  if (dayOfTrip >= 7) {
    return countSum - bigDayDiscount;
  }

  if (dayOfTrip >= 3) {
    return countSum - smallDayDiscount;
  }

  return countSum;
}

module.exports = calculateRentalCost;
