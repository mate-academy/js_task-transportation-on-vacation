/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const discountThree = 20;
  const discountSeven = 50;
  if (days >= 3 && days < 7) {
    return days * costPerDay - discountThree;
  } else if (days >= 7) {
    return days * costPerDay - discountSeven;
  }
  return days * costPerDay;
}

module.exports = calculateRentalCost;
