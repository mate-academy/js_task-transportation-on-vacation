/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const longTerm = 7;
  const mediumTerm = 3;
  const pricePerDay = 40;
  const discountMediumTerm = 20;
  const discountLongTerm = 50;

  if (days < mediumTerm) {
    return days * pricePerDay;
  }

  if (days >= mediumTerm && days < longTerm) {
    return days * pricePerDay - discountMediumTerm;
  }

  if (days >= longTerm) {
    return days * pricePerDay - discountLongTerm;
  }

  return calculateRentalCost();
}

module.exports = calculateRentalCost;
