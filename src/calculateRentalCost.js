/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const allCount = days * 40;
  let result = allCount - 50;

  if (days < 3) {
    result = allCount;
  } else if (days >= 3 && days <= 6) {
    result = allCount - 20;
  }

  return result;
}

module.exports = calculateRentalCost;
