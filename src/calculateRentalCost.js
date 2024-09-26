/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;
  const discountAfterThreeDays = 20;
  const discountAfterSevenDays = 50;
  let discount = 0;

  if (days >= 7) {
    discount -= discountAfterSevenDays;
  } else if (days >= 3) {
    discount -= discountAfterThreeDays;
  }

  return days * cost + discount;
}

module.exports = calculateRentalCost;
