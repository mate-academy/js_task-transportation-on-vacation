/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rent = 40;
  const maxDiscount = 50;
  const discount = 20;

  if (days < 3) {
    return days * rent;
  } else if (days < 7) {
    return days * rent - discount;
  } else {
    return days * rent - maxDiscount;
  }
}
calculateRentalCost(10);
module.exports = calculateRentalCost;
