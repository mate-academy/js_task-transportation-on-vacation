/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basicDiscount = 50;
  const extraDiscount = 20;
  const rentPrice = 40;
  const calc = days * rentPrice;
  const shortVacation = 2;
  const longVacation = 6;

  if (days <= shortVacation) {
    return calc;
  }

  if (days <= longVacation) {
    return calc - extraDiscount;
  }

  return calc - basicDiscount;
}

module.exports = calculateRentalCost;
