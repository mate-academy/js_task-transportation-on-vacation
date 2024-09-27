/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const discountThreeDays = 20;
  const discountSevenDays = 50;
  let total = days * price;

  if (days >= 3 && days < 7) {
    total = total - discountThreeDays;
  }

  if (days >= 7) {
    total = total - discountSevenDays;
  }

  return total;
}

module.exports = calculateRentalCost;
