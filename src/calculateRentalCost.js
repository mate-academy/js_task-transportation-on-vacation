function calculateRentalCost(days) {
  const pricePerDay = 40;
  const price = days * pricePerDay;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  if (days < 3) {
    return price;
  }

  if (days < 7) {
    return price - shortTermDiscount;
  }

  if (days >= 7) {
    return price - longTermDiscount;
  }
}

module.exports = calculateRentalCost;
