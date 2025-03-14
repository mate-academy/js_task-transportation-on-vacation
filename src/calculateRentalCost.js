/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
	// write code here
	const dailyCosts = 40;
	const sevenDaysDiscount = 50;
	const threeDaysDiscount = 20;
	const totalAmount = days * dailyCosts;

	if (days >= 7) {
		return totalAmount - sevenDaysDiscount;
	} else if (days >= 3) {
		return totalAmount - threeDaysDiscount;
	}
	return totalAmount;
}

module.exports = calculateRentalCost;
