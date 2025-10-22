/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCarCost = 40;
  const carRentalDiscount = 20;
  const carRentalDiscountBig = 50;

  if (days < 3) {
    return days * rentCarCost;
  }

  if (days >= 3 && days < 7) {
    return days * rentCarCost - carRentalDiscount;
  }

  if (days >= 7) {
    return days * rentCarCost - carRentalDiscountBig;
  }
}
module.exports = calculateRentalCost;
