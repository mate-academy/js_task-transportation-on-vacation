/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayPrice = 40;
  const finalPrice = dayPrice * days;
  const longLease = 7;
  const mediumLease = 3;

  if (days >= longLease) {
    return finalPrice - 50;
  } else if (days >= mediumLease) {
    return finalPrice - 20;
  } else {
    return finalPrice;
  }
}

module.exports = calculateRentalCost;
