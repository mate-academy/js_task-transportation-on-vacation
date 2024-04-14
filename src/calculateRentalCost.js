/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCosts = 40;
  const totalCosts = dayCosts * days;
  let discount = 0;

  if (days >= 7) {
    discount = 50;
  } else if (days >= 3) {
    discount = 20;
  }

  return totalCosts - discount;
}

module.exports = calculateRentalCost;
