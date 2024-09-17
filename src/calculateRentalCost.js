/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const totalAmount = costPerDay * days;
  const discount = 20;
  const extraDiscount = 50;

  if (days >= 7) {
    return totalAmount - extraDiscount;
  }

  if (days >= 3) {
    return totalAmount - discount;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
