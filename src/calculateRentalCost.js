function calculateRentalCost(days) {
  const dailyCost = 40;
  let total = days * dailyCost;

  if (days >= 7) {
    total -= 50;
  } else if (days >= 3) {
    total -= 20;
  }

  return total;
}

module.exports = calculateRentalCost;
