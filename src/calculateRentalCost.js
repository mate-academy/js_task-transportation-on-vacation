/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const costPerDay = 40;
  const bigDiscount = 50;
  const smallDiscount = 20;

  if (days >= 7) {
    return (costPerDay * days) - bigDiscount;
  } else if (days >= 3) {
    return (costPerDay * days) - smallDiscount;
  } else {
    return costPerDay * days;
  }
}

module.exports = calculateRentalCost;
