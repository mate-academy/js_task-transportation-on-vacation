/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SUM_PER_DAY = 40;
  const DAY_3_DISCOUNT = 20;
  const DAY_7_DISCOUNT = 50;
  const FIRST_BOUNDARY = 7;
  const SECOND_BOUNDARY = 3;
  const totalSum = days * SUM_PER_DAY;
  const total3DaySum = totalSum - DAY_3_DISCOUNT;
  const total7DaySum = totalSum - DAY_7_DISCOUNT;

  if (days >= FIRST_BOUNDARY) {
    return total7DaySum;
  }

  if (days >= SECOND_BOUNDARY) {
    return total3DaySum;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
