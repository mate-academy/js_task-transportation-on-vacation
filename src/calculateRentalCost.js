/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;
  const lowDiscount = 20;
  const highDiscount = 50;

  if (days >= 7) {
    return dailyCost * days - highDiscount;
  } else if (days >= 3) {
    return dailyCost * days - lowDiscount;
  } else {
    return dailyCost * days;
  }
}

module.exports = calculateRentalCost;
