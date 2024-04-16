function calculateRentalCost(days) {
  const dailyCost = 40;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= 3 && days < 7) {
    return dailyCost * days - SHORT_TERM_DISCOUNT;
  }

  if (days >= 7) {
    return dailyCost * days - LONG_TERM_DISCOUNT;
  }

  return dailyCost * days;
}

module.exports = calculateRentalCost;
