/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const calcCount = pricePerDay * days;
  const sailForThreeMore = 20;
  const sailForSevenMore = 50;
  const longPeriod = 7;
  const shortPeriod = 3;

  if (days >= longPeriod) {
    return calcCount - sailForSevenMore;
  }

  if (days >= shortPeriod) {
    return calcCount - sailForThreeMore;
  }

  if (days > 0) {
    return calcCount;
  }
}

module.exports = calculateRentalCost;
