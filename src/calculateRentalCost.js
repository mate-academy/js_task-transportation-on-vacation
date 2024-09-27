/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carCost = 40;
  const bigDiscount = 50;
  const basicDiscount = 20;
  const moreWeek = 7;
  const lessWeek = 3;
  const rentCost = days * carCost;

  if (days >= moreWeek) {
    return rentCost - bigDiscount;
  }

  if (days >= lessWeek) {
    return rentCost - basicDiscount;
  }

  return rentCost;
}

module.exports = calculateRentalCost;
