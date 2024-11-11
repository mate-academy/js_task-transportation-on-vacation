/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let daysPrice = days * 40;

  if (days >= 7) {
    daysPrice -= 50;
  } else if (days >= 3) {
    daysPrice -= 20;
  }

  return daysPrice;
}

module.exports = calculateRentalCost;
