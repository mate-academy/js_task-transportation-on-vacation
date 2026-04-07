/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentForDays = days;
  const total = 40 * days;

  if (days < 3) {
    return total;
  }

  if (rentForDays >= 7) {
    return total - 50;
  } else if (rentForDays >= 3 || rentForDays <= 6) {
    return total - 20;
  }
}

module.exports = calculateRentalCost;
