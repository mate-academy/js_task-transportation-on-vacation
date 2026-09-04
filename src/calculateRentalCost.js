/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const maximumDays = 7;
  const maximumDaysDiscount = 50;
  const normDays = 3;
  const normDaysDiscount = 20;
  const minimumDays = 1;
  const total = days * dailyRate;

  if (days >= maximumDays) {
    return total - maximumDaysDiscount;
  }

  if (days >= normDays) {
    return total - normDaysDiscount;
  }

  if (days >= minimumDays) {
    return total;
  }
}

module.exports = calculateRentalCost;
