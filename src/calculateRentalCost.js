/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let RentalCost = 40 * days;

  if (days >= 7) {
    RentalCost -= 50;
  } else if (days >= 3) {
    RentalCost -= 20;
  }

  return RentalCost;
}

module.exports = calculateRentalCost;
