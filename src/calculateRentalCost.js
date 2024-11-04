/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const lease = 40;

  if (days < 3) {
    return days * lease;
  }

  if (days < 7) {
    return days * lease - 20;
  }

  if (days >= 7) {
    return days * lease - 50;
  }
}

module.exports = calculateRentalCost;
