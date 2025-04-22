const cost = 40;
const discount = 20;
const bigDiscount = 50;
const longPeriod = 7;
const shortPeriod = 3;

function calculateRentalCost(days) {
  if (days >= longPeriod) {
    return cost * days - bigDiscount;
  }

  if (days >= shortPeriod) {
    return cost * days - discount;
  }

  return days * cost;
}

module.exports = calculateRentalCost;
