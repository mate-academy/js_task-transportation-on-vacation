/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // useless comment
  let finalPrice = 0;

  if (days >= 7) {
    finalPrice = 40 * days - 50;
  } else if (days >= 3) {
    finalPrice = 40 * days - 20;
  } else {
    finalPrice = 40 * days;
  }

  return finalPrice;
}

module.exports = calculateRentalCost;
