/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basicPrice = 40;
  const smallDisc = 20;
  const bigDisc = 50;

  if (days < 3) {
    return days * basicPrice;
  } else if (days >= 7) {
    return days * basicPrice - bigDisc;
  } else {
    return days * basicPrice - smallDisc;
  }
}

module.exports = calculateRentalCost;
