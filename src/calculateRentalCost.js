/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const bill = 40 * days;

  if (days < 3) {
    return bill;
  } else if (days >= 3 && days < 7) {
    return bill - 20;
  } else {
    return bill - 50;
  }
}

module.exports = calculateRentalCost;
