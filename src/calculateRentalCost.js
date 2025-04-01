function calculateRentalCost(days) {
    const DAILY_COST = 40;
    const DISCOUNT_SMALL = 20;
    const DISCOUNT_LARGE = 50;
    const DAYS_SMALL = 3;
    const DAYS_LARGE = 7;

    let totalCost = days * DAILY_COST;

    if (days >= DAYS_LARGE) return totalCost - DISCOUNT_LARGE;
    if (days >= DAYS_SMALL) return totalCost - DISCOUNT_SMALL;
    
    return totalCost;
}
