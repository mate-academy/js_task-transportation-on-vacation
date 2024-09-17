/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costOfDay = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days >= 7) {
    return costOfDay * days - bigDiscount;
  } else if (days >= 3) {
    return costOfDay * days - smallDiscount;
  }

  return costOfDay * days;
}

module.exports = calculateRentalCost;
