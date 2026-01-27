/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;
  const shortTermRentalDays = 3;
  const longTermRentalDays = 7;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  if (days >= longTermRentalDays) {
    return basePrice * days - longTermDiscount;
  }

  if (days >= shortTermRentalDays) {
    return basePrice * days - shortTermDiscount;
  }

  return basePrice * days;
}

module.exports = calculateRentalCost;
