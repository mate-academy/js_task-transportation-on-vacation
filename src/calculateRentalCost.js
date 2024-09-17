/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const normalRentalValue = days * 40;
  const firstDiscount = 20;
  const secondDiscount = 50;

  if (days < 3) {
    return normalRentalValue;
  }

  if (days < 7) {
    return normalRentalValue - firstDiscount;
  }

  if (days >= 7) {
    return normalRentalValue - secondDiscount;
  }
}

module.exports = calculateRentalCost;
