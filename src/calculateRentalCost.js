/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const discount = calculateDiscount(days);
  return days * 40 - discount;
}

function calculateDiscount(days) {
  if (days >= 7) {
    return 50;
  } else if (days >= 3 && days < 7) {
    return 20;
  } else {
    return 0;
  }
}

module.exports = calculateRentalCost;
