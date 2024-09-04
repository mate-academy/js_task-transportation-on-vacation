/**
 * @param {number} days
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40; // Вартість оренди за день
  let totalCost = days * dailyRate; // Загальна вартість без знижки

  // Знижка 50 для оренди на 7 або більше днів
  if (days >= 7) {
    totalCost -= 50;
  } else if (days >= 3) {
    totalCost -= 20;
  }

  return totalCost; // Повертаємо загальну вартість
}

module.exports = calculateRentalCost;

