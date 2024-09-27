/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const discount = 20;
  const bestDiscount = 50;

  if (days < 3) {
    return days * price;
  } else if (days >= 3 && days < 7) {
    return days * price - discount;
  } else {
    return days * price - bestDiscount;
  }
}

module.exports = calculateRentalCost;
