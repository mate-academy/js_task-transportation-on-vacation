/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentForDay = 40;
  const bigDiscount = 50;
  const rentSum = rentForDay * days;
  const smallDiscount = 20;

  if (days >= 7) {
    return rentSum - bigDiscount;
  }

  if (days >= 3) {
    return rentSum - smallDiscount;
  }

  return rentSum;
}

module.exports = calculateRentalCost;
