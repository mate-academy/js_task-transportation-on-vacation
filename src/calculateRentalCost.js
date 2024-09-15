/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const taxOfDay = 40;
  const discountSmall = 20;
  const discountLarg = 50;

  if (days >= 3 && days < 7) {
    return days * taxOfDay - discountSmall;
  }

  if (days >= 7) {
    return days * taxOfDay - discountLarg;
  }

  return days * taxOfDay;
}

module.exports = calculateRentalCost;
