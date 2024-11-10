/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentOneDay = 40;
  const discountMoreFiveDays = 50;
  const discountMoreThreeDays = 20;

  if (days >= 7) {
    return days * rentOneDay - discountMoreFiveDays;
  }

  if (days >= 3) {
    return days * rentOneDay - discountMoreThreeDays;
  }

  return days * rentOneDay;
}

module.exports = calculateRentalCost;
