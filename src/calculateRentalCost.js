/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;
  const cost = days * dayCost;
  const basicDiscount = 20;
  const additionalDiscount = 30;

  switch (true) {
    case (days >= 7):
      return cost - basicDiscount - additionalDiscount;

    case (days >= 3):
      return cost - basicDiscount;

    default:
      return cost;
  }
}

module.exports = calculateRentalCost;
