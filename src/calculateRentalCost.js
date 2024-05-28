/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;
  const manyDays = 7;
  const fewDays = 3;
  const manyDaysDiscount = 50;
  const fewDaysDiscount = 20;

  const totalCost = dailyCost * days;

  if (days >= manyDays) {
    return totalCost - manyDaysDiscount;
  }

  if (days >= fewDays) {
    return totalCost - fewDaysDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
