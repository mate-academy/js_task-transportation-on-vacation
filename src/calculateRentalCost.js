/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const discount1 = 20;
  const discount2 = 50;
  const rentPerDays = 40;
  const longPeriod = 7;
  const shortPeriod = 3;
  let total = rentPerDays * days;

  if (days < shortPeriod) {
  }

  if (days >= shortPeriod && days < longPeriod) {
    total = total - discount1;
  }

  if (days >= longPeriod) {
    total = total - discount2;
  }

  return total;
}

module.exports = calculateRentalCost;
