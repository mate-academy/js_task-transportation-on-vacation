/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let results = days * 40;

  if (days >= 7) {
    results = results - 50;
  } else if (days >= 3) {
    results = results - 20;
  }

  return results;
}

module.exports = calculateRentalCost;
