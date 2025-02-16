/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentDay = 40;
  const discountThreeDays = 20;
  const discountSevenDays = 50;
  let result = days * rentDay;

  if (days >= 7) {
    result = result - discountSevenDays;
  } else if (days >= 3) {
    result = result - discountThreeDays;
  }

  return result;
}

module.exports = calculateRentalCost;
