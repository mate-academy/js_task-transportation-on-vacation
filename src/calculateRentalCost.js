/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalDayCost = 40;
  const longTerm = 7;
  const longPeriodDiscount = 50;
  const shortTerm = 3;
  const shortPeriodDiscount = 20;

  let result = rentalDayCost * days;

  if (days >= longTerm) {
    result -= longPeriodDiscount;
  }

  if (days >= shortTerm) {
    result -= shortPeriodDiscount;
  }

  return result;
}

module.exports = calculateRentalCost;
