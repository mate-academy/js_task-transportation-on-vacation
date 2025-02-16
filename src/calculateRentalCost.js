/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MIDL_TERM = 3;
  const MIDL_TERM_DISCOUNT = 20;
  const rentCar = 40;

  if (days >= LONG_TERM) {
    return days * rentCar - LONG_TERM_DISCOUNT;
  }

  if (days >= MIDL_TERM) {
    return days * rentCar - MIDL_TERM_DISCOUNT;
  }

  return days * rentCar;
}

module.exports = calculateRentalCost;
