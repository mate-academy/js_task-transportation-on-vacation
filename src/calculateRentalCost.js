function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM = 3;
  const MEDIUM_TERM_DISCOUNT = 20;
  const ONE_DAY_COST = 40;

  const totalVacationCost = days * ONE_DAY_COST;

  if (days >= LONG_TERM) {
    return totalVacationCost - LONG_TERM_DISCOUNT;
  } else if (days >= MEDIUM_TERM) {
    return totalVacationCost - MEDIUM_TERM_DISCOUNT;
  } else {
    return totalVacationCost;
  }
}

module.exports = calculateRentalCost;
