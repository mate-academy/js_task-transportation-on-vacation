/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  //write code here
  const dailyCost = 40;
  const discount = 20;
  const secondDiscount = 50;

  if (days >= 7) {
    return dailyCost * days - secondDiscount;
  }

  if (days >= 3) {
    return dailyCost * days - discount;
  }

  return dailyCost * days;
}

module.exports = calculateRentalCost;
