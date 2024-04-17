/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseCost = days * 40;
  const longTermRentalDiscount = 50;
  const shortTermRentalDiscout = 20;

  if (days >= 7) {
    return baseCost - longTermRentalDiscount;
  } else if (days >= 3) {
    return baseCost - shortTermRentalDiscout;
  } else {
    return baseCost;
  }
}

module.exports = calculateRentalCost;
