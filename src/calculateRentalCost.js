/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTermDiscount = 50;
  const shortTermDiscount = 20;
  const defaultRentalPrice = 40;

  if (days < 3) {
    return days * defaultRentalPrice;
  }

  if (days >= 3 && days < 7) {
    return days * defaultRentalPrice - shortTermDiscount;
  }

  if (days >= 7) {
    return days * defaultRentalPrice - longTermDiscount;
  }
}

module.exports = calculateRentalCost;
