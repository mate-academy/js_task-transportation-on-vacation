/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDayCost = 40;
  const bigDiscount = 50;
  const smallDiscount = 20;
  const longTerm = 7;
  const shortTerm = 3;

  let totalCost = days * oneDayCost;

  if (days >= longTerm) {
    totalCost -= bigDiscount;
  } else if (days >= shortTerm) {
    totalCost -= smallDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
