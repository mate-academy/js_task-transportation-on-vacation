function calculateRentalCost(days) {
  const pricePerDay = 40;

  if (days >= 7) {
    return pricePerDay * days - 50;
  }
  if (days >= 3) {
    return pricePerDay * days - 20;
  }

  return pricePerDay * days;
}

module.exports = calculateRentalCost;
