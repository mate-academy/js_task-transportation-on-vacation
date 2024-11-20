/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPrice = 40;
  const rentCost = days * rentPrice;
  const moreSevenDays = 50;
  const moreThreeDays = 20;

  if (days >= 7) {
    return rentCost - moreSevenDays;
  } else if (days >= 3) {
    return rentCost - moreThreeDays;
  }

  return rentCost;
}

module.exports = calculateRentalCost;
