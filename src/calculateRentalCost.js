/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const currentRent = 40;
  const minDaysOff = 3;
  const maxDaysOff = 7;
  const minDiscountRent = 20;
  const maxDiscountRent = 50;

  if (days >= maxDaysOff) {
    return currentRent * days - maxDiscountRent;
  }

  if (days >= minDaysOff) {
    return currentRent * days - minDiscountRent;
  }

  return currentRent * days;
}

module.exports = calculateRentalCost;
