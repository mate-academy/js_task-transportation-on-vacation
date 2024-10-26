function calculateRentalCost(days) {
  const dayCosts = 40;
  let totalAmount = days * dayCosts;
  const longTermLoan = 7;
  const longTermDiscount = 50;
  const mediumTermLoan = 3;
  const mediumTermDiscount = 20;

  if (days >= longTermLoan) {
    totalAmount -= longTermDiscount;

    return totalAmount;
  }

  if (days >= mediumTermLoan) {
    totalAmount -= mediumTermDiscount;

    return totalAmount;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
