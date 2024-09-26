/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPerDay = 40;
  const unDiscountRent = days * rentPerDay;
  const extraDiscount = 50;
  const usualDiscount = 20;
  const longRentTerm = 7;
  const shortRentTerm = 3;

  switch (true) {
    case days >= longRentTerm:
      return unDiscountRent - extraDiscount;
    case days >= shortRentTerm:
      return unDiscountRent - usualDiscount;
    default:
      return unDiscountRent;
  }
}

module.exports = calculateRentalCost;
