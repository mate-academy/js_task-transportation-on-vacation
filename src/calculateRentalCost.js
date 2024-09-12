/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let bill = days * 40;

  if (days >= 7) {
    bill -= 50;
  } else if (days >= 3) {
    bill -= 20;
  }

  return bill;
}

module.exports = calculateRentalCost;
