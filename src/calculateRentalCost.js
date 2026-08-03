/**
 * @param {number} days
 * @return {number}
 */
function calculateRentalCost(days) {
  let rent = days * 40;

  if (days >= 7) {
    rent -= 50;
  } else if (days >= 3) {
    rent -= 20;
  }

  return rent;
}

module.exports = calculateRentalCost;
