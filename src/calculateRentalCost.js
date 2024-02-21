/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const Price_per_day = 40;
  const Long_term = 7;
  const Long_term_discount = 50;
  const short_term = 3;
  const short_term_discount = 20;

  const basePrice = days * Price_per_day;

  if (days >= Long_term) {
    return basePrice - Long_term_discount;
  }

  if (days >= short_term) {
    return basePrice - short_term_discount;
  }

  return basePrice;
}


module.exports = calculateRentalCost;
