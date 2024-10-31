/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalPrice = 0;
  const cost = 40;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;
  const longRental = 7;
  const mediumRental = 3;

  if (days >= longRental) {
    totalPrice += cost * days - longTermDiscount;

    return totalPrice;
  }

  if (days >= mediumRental) {
    totalPrice += cost * days - shortTermDiscount;

    return totalPrice;
  }

  totalPrice += cost * days;

  return totalPrice;
}

module.exports = calculateRentalCost;
