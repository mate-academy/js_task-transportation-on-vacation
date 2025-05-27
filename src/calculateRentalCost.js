/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalRentalPrice = rentalDays * DAILY_RENTAL_PRICE;

  if (rentalDays >= LONG_TERM_RENTAL_DAYS) {
    return totalRentalPrice - LONG_TERM_DISCOUNT;
  }

  if (rentalDays >= MID_TERM_RENTAL_DAYS) {
    return totalRentalPrice - MID_TERM_DISCOUNT;
  }

  return totalRentalPrice;
}

module.exports = calculateRentalCost;
