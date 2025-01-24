/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const dailyRate = 40;
  let totalCost = days * dailyRate;

  if (days >= 7) {
    totalCost -= 50; // Скидка $50 за 7 и более дней
  } else if (days >= 3) {
    totalCost -= 20; // Скидка $20 за 3–6 дней
  }

  return totalCost;
}

module.exports = calculateRentalCost;

