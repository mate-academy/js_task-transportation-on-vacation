/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const costOneDay = 40;
  const discountMoreThreeDays = 20;
  const discountMoreSevenDays = 50;

  if (days >= 7) {
    return days * costOneDay - discountMoreSevenDays;
  } else if (days >= 3) {
    return days * costOneDay - discountMoreThreeDays;
  }

  return (days * 40);
}

module.exports = calculateRentalCost;
