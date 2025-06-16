/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPerDay = 40;
  const shortDiscount = 20;
  const longDiscount = 50;
  const totalCost = days * rentPerDay;

  if (days >= 7) {
    return totalCost - longDiscount;
  } else if (days >= 3) {
    return totalCost - shortDiscount;
  } else {
    return totalCost;
  }
}

module.exports = calculateRentalCost;
