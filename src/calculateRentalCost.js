function calculateRentalCost(days) {
  const basePrice = 40;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;

  if (days < shortTerm) {
    return days * basePrice;
  }

  if (days >= shortTerm && days < longTerm) {
    return days * basePrice - shortTermDiscount;
  }

  if (days >= longTerm) {
    return days * basePrice - longTermDiscount;
  }
}

module.exports = calculateRentalCost;
