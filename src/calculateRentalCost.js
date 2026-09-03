/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_COST = 40;
  const BASIC_DISCOUNT_DAYS = 3;
  const BASIC_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;

  // Primeiro calcula o preço total sem nenhum desconto.
  const totalCost = days * DAILY_COST;

  // Aluguéis de 7 dias ou mais recebem o maior desconto.
  if (days >= LONG_TERM_DISCOUNT_DAYS) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  // Aluguéis de 3 a 6 dias recebem o desconto básico.
  if (days >= BASIC_DISCOUNT_DAYS) {
    return totalCost - BASIC_DISCOUNT;
  }

  // Aluguéis menores que 3 dias não recebem desconto.
  return totalCost;
}

module.exports = calculateRentalCost;
