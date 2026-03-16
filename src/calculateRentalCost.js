/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const total = days * 40;
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
