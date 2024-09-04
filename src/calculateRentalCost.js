/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const totalCost = days * dailyRate;
  const minDiscont = 20;
  const maxDiscont = 50;
  const minDays = 3;
  const MaxDays = 7;

  if (days >= MaxDays) {
    return totalCost - maxDiscont;
  } else if (days >= minDays) {
    return totalCost - minDiscont;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
