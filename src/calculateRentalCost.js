function calculateRentalCost(days) {
  const price = 40;
  const total = price * days;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;

  if (days < shortTerm) {
    return total;
  }

  if (days < longTerm) {
    return total - shortTermDiscount;
  }

  return total - longTermDiscount;
}
module.exports = calculateRentalCost;
