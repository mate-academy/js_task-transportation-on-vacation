/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const calculateDays = days * 40;

  if (days >= 7) {
    return calculateDays - 50;
  } else if (days >= 3) {
    return calculateDays - 20;
  }

  return calculateDays;
}

module.exports = calculateRentalCost;
