/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const longTermDays = 7;
  const midTermDays = 3;
  const longTermDiscount = 50;
  const midTermDiscount = 20;
  const total = days * costPerDay;

  if (days >= longTermDays) {
    return total - longTermDiscount;
  }

  if (days >= midTermDays) {
    return total - midTermDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
