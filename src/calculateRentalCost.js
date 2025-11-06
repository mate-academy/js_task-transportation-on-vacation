/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const costPerDay = 40;
  const discount = 20;
  const longTermDiscount = 50;

  if (days >= 7) {
    return days * costPerDay - longTermDiscount;
  }

  if (days >= 3) {
    return days * costPerDay - discount;
  }

  if (days < 3) {
    return days * costPerDay;
  }
}

module.exports = calculateRentalCost;
