/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  let result = days * 40;
  const longTerm = 50;
  const shortTerm = 20;
  const sevenDays = 7;
  const treeDays = 3;
  const sixDays = 6;

  if (days >= sevenDays) {
    result -= longTerm;
  }

  if (days >= treeDays && days <= sixDays) {
    result -= shortTerm;
  }

  return result;
}

module.exports = calculateRentalCost;
