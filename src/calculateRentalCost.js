/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const discount = 20;
  const bigDiscount = 50;
  const totalAmount = days * costPerDay;

  if (days >= 7) {
    return totalAmount - bigDiscount;
  }

  if (days >= 3) {
    return totalAmount - discount;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
