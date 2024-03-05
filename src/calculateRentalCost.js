/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const fullRentalPrice = 40 * days;
  const bigDiscount = 50;
  const smallDiscount = 20;

  if (days < 3) {
    return fullRentalPrice;
  } else if (days >= 3 && days < 7) {
    return fullRentalPrice - smallDiscount;
  } else if (days >= 7) {
    return fullRentalPrice - bigDiscount;
  }
}

module.exports = calculateRentalCost;
