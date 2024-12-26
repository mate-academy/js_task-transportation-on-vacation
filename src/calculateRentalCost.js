/**
 * @param {number} days
 *
 * @return {number}
 */
const calculateRentalCost = (days) => {
  const CAR_COST = 40;
  const DISCOUNT_3_DAYS = 20;
  const DISCOUNT_7_DAYS = 50;
  const RENT = CAR_COST * days;

  const discount =
    days >= 7 ? DISCOUNT_7_DAYS : days >= 3 ? DISCOUNT_3_DAYS : 0;

  return RENT - discount;
};

module.exports = calculateRentalCost;
