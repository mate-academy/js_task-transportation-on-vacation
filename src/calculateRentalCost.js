/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const total = days * 40;
  
  return days > 2 && days < 7
    ? total - 20
    : days > 6
      ? total - 50
      : total;
}

module.exports = calculateRentalCost;
