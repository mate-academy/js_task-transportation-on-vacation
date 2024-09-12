/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;
  const calculation = days * dayRent;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days >= 7) {
    return calculation - bigDiscount;
  }

  if (days >= 3) {
    return calculation - smallDiscount;
  }

  return calculation;
}

module.exports = calculateRentalCost;
