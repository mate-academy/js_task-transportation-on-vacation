/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const config = {
    long_term_discount: 50,
    middle_term_discount: 20,
    price: 40,
  };

  if (days >= 7) {
    return config.price * days - config.long_term_discount;
  }

  if (days >= 3) {
    return config.price * days - config.middle_term_discount;
  }

  return config.price * days;
}

module.exports = calculateRentalCost;
