/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const total = days * costPerDay;
  const daysForDiscount = 3;
  const discount = 20;
  const daysForBigDiscount = 7;
  const bigDiscount = 50;

  if (days >= daysForBigDiscount) {
    return total - bigDiscount;
  }

  if (days >= daysForDiscount) {
    return total - discount;
  }

  return total;
}

module.exports = calculateRentalCost;
