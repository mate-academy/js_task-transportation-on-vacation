/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costOneDay = 40;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  if (days < 3) {
    return days * costOneDay;
  }

  if (days <= 6) {
    return days * costOneDay - shortTermDiscount;
  }

  return days * costOneDay - longTermDiscount;
}

module.exports = calculateRentalCost;
