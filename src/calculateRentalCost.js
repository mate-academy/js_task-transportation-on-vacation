/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCosts = 40;
  const smallDiscount = 20;
  const discount = 50;

  if (days >= 7) {
    return days * rentCosts - discount;
  } else if (days >= 3) {
    return days * rentCosts - smallDiscount;
  } else {
    return days * rentCosts;
  }
}

module.exports = calculateRentalCost;
