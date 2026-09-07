/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;
  const basicDiscount = 20;
  const additionalDiscount = 50;
  const longTermDays = 7;
  const shortTermDays = 3;

  const totalCost = days * dailyCost;

  if (days >= longTermDays) {
    return totalCost - additionalDiscount;
  }

  if (days >= shortTermDays) {
    return totalCost - basicDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
