/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const regularCost = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days < 3) {
    return days * regularCost;
  }

  if (days < 7) {
    return days * regularCost - smallDiscount;
  }

  return days * regularCost - bigDiscount;
}

module.exports = calculateRentalCost;
