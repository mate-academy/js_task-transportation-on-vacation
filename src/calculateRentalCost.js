/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;
  let totalCost = cost * days;
  const discountThree = 20;
  const discountSeven = 50;
  if (days <= 0) {
    return 'Can\'t calculate the rent';
  } else if (days >= 3 && days < 7) {
    totalCost -= discountThree;
  } else if (days >= 7) {
    totalCost -= discountSeven;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
