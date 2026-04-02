/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let sum = 0;

  if (days <= 2) {
    sum += days * 40;

    return sum;
  } else if (days < 7) {
    sum += days * 40 - 20;

    return sum;
  } else if (days >= 7) {
    sum += days * 40 - 50;

    return sum;
  }
}

module.exports = calculateRentalCost;
