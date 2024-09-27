/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dayCost = 40;
  const minDiscount = 20;
  const maxDiscount = 50;
  const daysMin = 3;
  const daysMax = 7;
  const result = days * dayCost;

  if (days >= daysMax) {
    return (result - maxDiscount);
  }

  if (days >= daysMin) {
    return (result - minDiscount);
  }

  return result;
}

module.exports = calculateRentalCost;
