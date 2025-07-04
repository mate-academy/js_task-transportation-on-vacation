/**
 * @param {number} days
 *
 * @return {number}
 */

const baseRental = 40;

function calculateRentalCost(days) {
  const totalRental = days * baseRental;

  if (days >= 7) {
    return totalRental - 50;
  } else if (days >= 3) {
    return totalRental - 20;
  } else if (days < 3) {
    return totalRental;
  }
}

module.exports = calculateRentalCost;
