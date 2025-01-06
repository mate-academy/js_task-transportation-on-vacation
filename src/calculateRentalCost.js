const priceOneday = 40;
const lowDiscount = 20;
const highDiscount = 50;

function calculateRentalCost(days) {
  const totalCost = priceOneday * days;

  if (days >= 7) {
    return totalCost - highDiscount;
  } else if (days >= 3) {
    return totalCost - lowDiscount;
  } else {
    return totalCost;
  }
}

module.exports = calculateRentalCost;
