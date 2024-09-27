/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const bigDiscount = 50;
  const smallDiscount = 20;
  const dayRentPrice = 40;
  const rentSum = dayRentPrice * days;

  if (days >= 7) {
    return rentSum - bigDiscount;
  }

  if (days >= 3) {
    return rentSum - smallDiscount;
  }

  return rentSum;
}

module.exports = calculateRentalCost;
