const LONG_TERM = 3;
const BASEPRISE = 40;
const SELL = 20;

const GOOD_DAYS = 7;
const DISCOUNT = 50;

function calculateRentalCost(days) {
  const fullCost = days * BASEPRISE;

  if (days >= GOOD_DAYS) {
    return fullCost - DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return fullCost - SELL;
  }

  return fullCost;
}

module.exports = calculateRentalCost;
