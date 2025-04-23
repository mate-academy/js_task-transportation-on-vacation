/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDayCost = 40;
  let discount = 0;

  if (days >= 3 && days <= 6) {
    discount = 20;
  }

  if (days >= 7) {
    discount = 50;
  }

  return days * oneDayCost - discount;
}

module.exports = calculateRentalCost;
