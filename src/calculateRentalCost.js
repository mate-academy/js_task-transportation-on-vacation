/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
    const COST_PER_DAY = 40;
    const LONG_TERM = 7;
    const LONG_TERM_DISCOUNT = 50;
    const SMALL_TERM = 3;
    const SMALL_TERM_DISCOUNT = 20;

    const basePrice = days * COST_PER_DAY;

    if (days >= LONG_TERM) {
        return basePrice - LONG_TERM_DISCOUNT;
    }

    if (days >= SMALL_TERM) {
        return basePrice - SMALL_TERM_DISCOUNT;
    }

    return basePrice;
}

module.exports = calculateRentalCost;
