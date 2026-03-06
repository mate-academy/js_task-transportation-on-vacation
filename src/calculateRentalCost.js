/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const costPerDay = 40;
  const sevenDays = 7;
  const fiftyDiscount = 50;
  const threeDays = 3;
  const twentyDiscount = 20;

  const result = days * costPerDay;

  if (days >= sevenDays) {
    return result - fiftyDiscount;
  }

  if (days >= threeDays) {
    return result - twentyDiscount;
  }

  return result;
}

module.exports = calculateRentalCost;
