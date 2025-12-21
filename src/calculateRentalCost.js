/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days > 0 && days < 3) {
    return 40 * days;
  }

  if (days >= 3 && days < 7) {
    let result = 40 * days;

    result = result - 20;

    return result;
  }

  if (days >= 7) {
    let result = 40 * days;

    result = result - 50;

    return result;
  }
}

module.exports = calculateRentalCost;
