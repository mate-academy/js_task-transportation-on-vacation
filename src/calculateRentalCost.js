/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;

  switch (true) {
    case days < 3:
      return days * rentCost;
    case days < 7:
      return (days * rentCost) - smallDiscount;
    default:
      return (days * rentCost) - bigDiscount;
  }
}

module.exports = calculateRentalCost;
