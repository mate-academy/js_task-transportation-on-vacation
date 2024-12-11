/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  if (days <= 0) {
    return 0;
  }

  let rent = days * 40;

  if (days >= 7) {
    rent = rent - 50;
  } else if (days >= 3) {
    rent = rent - 20;
  }

  return rent;
}

module.exports = calculateRentalCost;
