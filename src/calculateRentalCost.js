/**
 * @param {number} days
 *
 * @return {number}
 */

const CAR_RENT_PER_DAY = 40;
const SALE_FOR_WEEK_AND_MORE = 50;
const SALE_FOR_SHORT_TERM = 20;
const SEVEN_DAYS_RENT = 7;
const THREE_DAYS_RENT = 3;

function calculateRentalCost(days) {
  const totalSum = CAR_RENT_PER_DAY * days;
  if (days >= SEVEN_DAYS_RENT) {
    return totalSum - SALE_FOR_WEEK_AND_MORE;
  }

  if (days >= THREE_DAYS_RENT) {
    return totalSum - SALE_FOR_SHORT_TERM;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
