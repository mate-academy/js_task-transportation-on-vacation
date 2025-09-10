/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  const RENTAL_PRICE = 40;
  const MIN_RENT_DAYS = 3;
  const MID_RENT_DAYS = 6;
  const MAX_RENT_DAYS = 7;
  //

  if (days < MIN_RENT_DAYS) {
    return RENTAL_PRICE * days;
  }

  if (days >= MIN_RENT_DAYS && days <= MID_RENT_DAYS) {
    return RENTAL_PRICE * days - DISCOUNT;
  }

  if (days >= MAX_RENT_DAYS) {
    return RENTAL_PRICE * days - BIG_DISCOUNT;
  }
}

module.exports = calculateRentalCost;
