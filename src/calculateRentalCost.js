/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  return (days >= 7) ? ((days * 40) - 50)
    : (days >= 3) ? ((days * 40) - 20)
      : days * 40;
}

module.exports = calculateRentalCost;
