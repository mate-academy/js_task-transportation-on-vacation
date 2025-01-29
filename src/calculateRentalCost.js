/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalCost = days * 40;

  return days >= 7 ? totalCost - 50 : days >= 3 ? totalCost - 20 : totalCost;
}

module.exports = calculateRentalCost;
