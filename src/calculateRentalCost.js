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
    result = days * carPrice;

    return result;
  }
}

module.exports = calculateRentalCost;
