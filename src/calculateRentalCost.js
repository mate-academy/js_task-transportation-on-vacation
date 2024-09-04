function calculateRentalCost(days) {
  const priceDay = 40;
  let totalPrice = priceDay * days;

  if (days >= 7) {
    totalPrice -= 50;
  } else if (days >= 3) {
    totalPrice -= 20;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
