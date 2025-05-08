/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTermDays = 7;
  const shortTermDays = 3;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;
  const pricePerDay = 40;
  const total = pricePerDay * days;

  if (days >= longTermDays) {
    return total - longTermDiscount;
  }

  if (days >= shortTermDays) {
    return total - shortTermDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
