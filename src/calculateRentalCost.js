/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const shortDiscount = 20;
  const longDiscount = 50;
  const discount = days * 40;

  if (days < 3) {
    return discount;
  }

  if (days < 7) {
    return discount - shortDiscount;
  }

  if (days >= 7) {
    return discount - longDiscount;
  }
}

module.exports = calculateRentalCost;
