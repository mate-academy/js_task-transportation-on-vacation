/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carPrice = 40;
  let result = 0;

  if (days >= 7) {
    result = days * carPrice - 50;

    return result;
  }

  if (days >= 3) {
    result = days * carPrice - 20;

    return result;
  } else {
    return 80;
  }
}

module.exports = calculateRentalCost;
