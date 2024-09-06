/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let sale = 0;

  if (days >= 7) {
    sale = 50;
  } else if (days >= 3) {
    sale = 20;
  }

  return days * 40 - sale;
}

module.exports = calculateRentalCost;
