/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;
  const day3Discount = 20;
  const day7Discount = 50;
  const totalPrice = cost * days;

  if (days >= 3 && days < 7) {
    return totalPrice - day3Discount;
  } else if (days >= 7) {
    return totalPrice - day7Discount;
  } else {
    return totalPrice;
  }
}

module.exports = calculateRentalCost;
