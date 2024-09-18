/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dayRent = 40;
  let totalRental = 0;

  if (days >= 7) {
    totalRental = dayRent * days - 50;
  } else if (days >= 3) {
    totalRental = dayRent * days - 20;
  } else {
    totalRental = dayRent * days;
  }

  return totalRental;
}

module.exports = calculateRentalCost;
