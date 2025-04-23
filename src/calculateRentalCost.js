/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENTAL_DEFAULT = 40;
  const RENTAL_DISCOUNT_7 = 50;
  const RENTAL_DISCOUNT_3 = 20;

  switch (true) {
    case days >= 7:
      return RENTAL_DEFAULT * days - RENTAL_DISCOUNT_7;
    case days >= 3:
      return RENTAL_DEFAULT * days - RENTAL_DISCOUNT_3;
    default:
      return RENTAL_DEFAULT * days;
  }
}

module.exports = calculateRentalCost;
