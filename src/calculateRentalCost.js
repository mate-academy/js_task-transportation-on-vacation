/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;
  const longDiscount = 50;
  const shortDiscount = 20;
  const price = cost * days;

  if (days >= 7) {
    return price - longDiscount;
  } else if (days >= 3) {
    return price - shortDiscount;
  }

  return price;
}

module.exports = calculateRentalCost;
