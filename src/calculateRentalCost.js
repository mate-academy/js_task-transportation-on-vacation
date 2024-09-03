'use strict';

/**
 * @param {number} days
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  let totalCost = days * dailyRate;

  if (days >= 7) {
    totalCost -= 50; // скидка $50, если 7 и более дней
  } else if (days >= 3) {
    totalCost -= 20; // скидка $20, если 3 и более дней
  }

  return totalCost;
}

module.exports = calculateRentalCost; // CommonJS синтаксис экспорта
