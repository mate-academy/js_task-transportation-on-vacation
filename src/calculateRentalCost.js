function calculateRentalCost(days) {
  const dailyRent = 40;

  if (days < 3) {
    return dailyRent * days;
  }

  if (days >= 3 && days < 7) {
    return dailyRent * days - 20;
  }

  if (days >= 7) {
    return dailyRent * days - 50;
  }
}

module.exports = calculateRentalCost;
