/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const bigDiscount = 50;
  const smallDiscount = 20;
  const priceForDay = 40;
  const totalAmount = days * priceForDay;

  if (days >= 7) {
    return totalAmount - bigDiscount;
  }

  if (days >= 3) {
    return totalAmount - smallDiscount;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
