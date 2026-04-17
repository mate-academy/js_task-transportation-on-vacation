/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const fixPrice = 40;
  let finalPrice = 0;

  if (days >= 7) {
    finalPrice = days * fixPrice - 50;
  } else if (days >= 3) {
    finalPrice = days * fixPrice - 20;
  } else {
    finalPrice = days * fixPrice;
  }

  return finalPrice;
}

module.exports = calculateRentalCost;
