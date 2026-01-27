/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASIC_COST = 40;
  const FIRST_DISCOUNT = 20;
  const SECOND_DISCOUNT = 50;

  if (days < 3) {
    return BASIC_COST * days;
  } else if (days >= 3 && days < 7) {
    return (BASIC_COST * days) - FIRST_DISCOUNT;
  } else {
    return (BASIC_COST * days) - SECOND_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
