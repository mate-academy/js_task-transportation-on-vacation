/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const discount1 = 50;
  const discount2 = 20;
  const price = 40;
  const totalPrice = days * price;

  let moneyBack1 = 0;
  let moneyBack2 = 0;
  let moneyBackAll = 0;
  let resultCost = 0;

  if (days < 3) {
    resultCost = totalPrice;
  } else if (days === 3) {
    resultCost = totalPrice - discount2;
  } else if (days > 3 && days <= 6) {
    moneyBackAll = (Math.trunc(days / 3) - 1) * discount2;
    resultCost = totalPrice - moneyBackAll;
  } else if (days >= 7) {
    moneyBack1 = discount1 * Math.trunc(days / 7);
    const daysAfterUseDiscount1 = days - ((Math.trunc(days / 7)) * 7);
    moneyBack2 = discount2 * daysAfterUseDiscount1;
    moneyBackAll = moneyBack1 + moneyBack2;
    resultCost = totalPrice - moneyBackAll;
  }

  return resultCost;
}

module.exports = calculateRentalCost;
