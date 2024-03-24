/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const discount1 = 20;
  const discount2 = 50;
  const rentPerDays = 40;
  let total = rentPerDays * days;

  if (days < 3) {
  }

  if (days >= 3 && days < 7) {
    total = total - discount1;
  }

  if (days >= 7) {
    total = total - discount2;
  }

  return total;
}

module.exports = calculateRentalCost;
