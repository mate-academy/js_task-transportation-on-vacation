/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let amount = days * 40;

  if (days >= 7) {
    amount -= 50; // знижка для 7+ днів
  } else if (days >= 3) {
    amount -= 20; // знижка для 3-6 днів
  }

  return amount; // завжди повертаємо значення
}

module.exports = calculateRentalCost;
