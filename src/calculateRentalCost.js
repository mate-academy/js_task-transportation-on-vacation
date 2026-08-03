/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const periodPrice = days * pricePerDay;

  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  if (days >= 7) {
    return periodPrice - longTermDiscount;
  }

  if (days >= 3) {
    return periodPrice - shortTermDiscount;
  }

  return periodPrice;
}

module.exports = calculateRentalCost;
