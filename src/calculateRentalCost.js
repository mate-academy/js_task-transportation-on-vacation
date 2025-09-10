/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const discount = 20;
  const bigDiscount = 50;
  const rentalPrice = 40;
  const minRentlDays = 3;
  const midRentlDays = 6;
  const maxRentDays = 7;
  //

  if (days < minRentlDays) {
    return rentalPrice * days;
  }

  if (days >= minRentlDays && days <= midRentlDays) {
    return rentalPrice * days - discount;
  }

  if (days >= maxRentDays) {
    return rentalPrice * days - bigDiscount;
  }
}

module.exports = calculateRentalCost;
