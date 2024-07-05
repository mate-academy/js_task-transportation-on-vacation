/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;
  const longDays = 7;
  const shortDays = 3;
  const longDiscount = 50;
  const shortDiscount = 20;
  const price = cost * days;

  if (days >= longDays) {
    return price - longDiscount;
  } else if (days >= shortDays) {
    return price - shortDiscount;
  }

  return price;
}

module.exports = calculateRentalCost;
