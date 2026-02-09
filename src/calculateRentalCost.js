function calculateRentalCost(days) {
  const dailyRate = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const basicTermDiscount = 20;
  const basicTerm = 3;

  if (days >= longTerm) {
    return dailyRate * days - longTermDiscount;
  }

  if (days >= basicTerm) {
    return dailyRate * days - basicTermDiscount;
  }

  if (days < basicTerm) {
    return dailyRate * days;
  }
}

module.exports = calculateRentalCost;
