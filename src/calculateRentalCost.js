/**
 * @param {number} days
 * 40 reais dia
 * 50 off 1 semana
 * 20 off 3 dias
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;
  const result = days * cost;
  const longTerm = 7;
  const shortTerm = 3;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;

  if (days >= longTerm)
    return (result - longTermDiscount);
  if (days >= shortTerm)
    return (result - shortTermDiscount);
  return result;
}

module.exports = calculateRentalCost;
