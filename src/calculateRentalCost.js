/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const smallDiscount = 20;
  const discount = 50;
  const smallDiscountStart = 3;
  const discountStart = 7;

  // Не совсем понимаю зачем нужны переменные для 3 и 7. Это же и есть дни.

  if (days < smallDiscountStart) {
    return price * days;
  } else if (days >= smallDiscountStart & days < discountStart) {
    return price * days - smallDiscount;
  } else if (days >= discountStart) {
    return price * days - discount;
  }
}

module.exports = calculateRentalCost;
