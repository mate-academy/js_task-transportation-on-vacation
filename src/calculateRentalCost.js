/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rentPerDay = 40;
  let rentTotal = rentPerDay * days;

  if (days >= 7) {
    rentTotal = rentTotal - 50;
  }

  if (days < 7 && days >= 3) {
    rentTotal = rentTotal - 20;
  }

  return rentTotal;
}

module.exports = calculateRentalCost;
