/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseRentalPerDay = 40;
  const discountThreeDays = 20;
  const cashbackByWeek = 50;
  const longTerm = 7;
  const shortTerm = 3;
  const cost = baseRentalPerDay * days;

  if (days >= longTerm) {
    return cost - cashbackByWeek;
  }

  if (days >= shortTerm) {
    return cost - discountThreeDays;
  }

  return cost;
}

module.exports = calculateRentalCost;
