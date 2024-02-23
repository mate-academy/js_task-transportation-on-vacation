/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;
  const lowDiscount = 20;
  const bigDiscount = 50;

  if (days < 3) {
    return days * dayCost;
  } else if (days < 7 && days >= 3) {
    return (days * dayCost) - lowDiscount;
  } else {
    return (days * dayCost) - bigDiscount;
  }
}

module.exports = calculateRentalCost;
