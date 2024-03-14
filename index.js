import fetch from 'node-fetch';
import notifier from 'node-notifier';

async function fetchCryptoPrice(coinId = 'bitcoin') {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data[coinId].usd;
    } catch (error) {
        console.error('Error fetching price:', error);
        return null;
    }
}

async function checkPriceAndNotify() {
    const coinId = 'bitcoin'; // Placeholder, make dynamic as needed
    const lowerThreshold = 70000; // Example threshold
    const upperThreshold = 75000; // Example threshold

    const price = await fetchCryptoPrice(coinId);

    // Clear the console for a refresh effect. Comment out if it behaves oddly in your environment.
    console.clear(); 

    // Display the current price
    console.log(`Current ${coinId} Price: ${price} USD`);

    if (price <= lowerThreshold || price >= upperThreshold) {
        notifier.notify({
            title: `Crypto Price Alert - ${coinId}`,
            message: `Price is now ${price} USD, which crosses your threshold`,
            sound: true, // Only works on macOS and Windows
        });
        console.log(`Notification sent: ${coinId} is now ${price} USD.`);
    }
}

// Run the check every 30 seconds
setInterval(checkPriceAndNotify, 30 * 1000); // 30 seconds
