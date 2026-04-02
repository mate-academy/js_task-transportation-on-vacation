/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const shortTermThreshold = 3;
  const longTermThreshold = 7;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  const totalPrice = days * pricePerDay;

  if (days >= longTermThreshold) {
    return totalPrice - longTermDiscount;
  }

  if (days >= shortTermThreshold) {
    return totalPrice - shortTermDiscount;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
