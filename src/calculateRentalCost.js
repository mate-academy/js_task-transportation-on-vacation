/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentDays = 40;
  const total = rentDays * days;

  if (days >= 3 && days <= 6) {
    return total - 20;
  } else if (days >= 7) {
    return total - 50;
  } else {
    return total;
  }
}

module.exports = calculateRentalCost;
