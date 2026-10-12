function calculateRentalCost(days) {
  const dayCost = 40;
  let total = days * dayCost;

  if (days >= 7) {
    total -= 50;
  } else if (days >= 3) {
    total -= 20;
  }

  return total;
}

module.exports = calculateRentalCost;

