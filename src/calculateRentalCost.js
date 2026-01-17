/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyPrice = 40;

  const shortTermRentalDays = 3;
  const shortTermDiscount = 20;
  const longTermRentalDays = 7;
  const longTermDiscount = 50;

  const totalPrice = days * dailyPrice;

  if (days >= longTermRentalDays) {
    return totalPrice - longTermDiscount;
  }

  if (days >= shortTermRentalDays) {
    return totalPrice - shortTermDiscount;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
