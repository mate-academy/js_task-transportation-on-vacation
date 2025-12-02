/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  let cost = days * dailyRate;

  if (days >= 3 && days <= 6) {
    // базова знижка
    cost -= 20;
  } else if (days >= 7) {
    // базова + додаткова знижка
    cost -= 50;
  }

  return cost;
}

module.exports = calculateRentalCost;
