/**
 * @param {number} days
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40; // Вартість оренди за день
  let totalCost = days * dailyRate; // Загальна сума без знижок

  // Логіка знижок
  if (days >= 7) {
    totalCost -= 50; // Знижка $50 для 7 або більше днів
  } else if (days >= 3) {
    totalCost -= 20; // Знижка $20 для 3 до 6 днів
  }

  return totalCost; // Повертаємо загальну суму
}

module.exports = calculateRentalCost;
