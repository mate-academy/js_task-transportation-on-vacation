/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayPrice = 40;
  const bigDiscount = 50;
  const smallDiscount = 20;

  if (days >= 3 && days < 7) {
    return days * dayPrice - smallDiscount;
  } else if (days >= 7) {
    return days * dayPrice - bigDiscount;
  }

  return days * dayPrice;
}

module.exports = calculateRentalCost;
