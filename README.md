# Cryptocurrency Price Alert Script

The Cryptocurrency Price Alert script is a Node.js utility designed to monitor the price of a specified cryptocurrency and notify the user when the price crosses predefined upper or lower thresholds. This real-time monitoring tool helps users stay informed about significant price movements without the need to constantly check online exchanges or market data platforms.

## Features

- **Real-time Price Monitoring**: Automatically fetches the latest cryptocurrency price every 30 seconds.
- **Desktop Notifications**: Sends a desktop notification when the price crosses the user-defined thresholds.
- **Customizable Thresholds**: Users can set their own upper and lower price limits for alerts.
- **Supports Multiple Cryptocurrencies**: Easily modified to monitor different cryptocurrencies available on the CoinGecko API.

## Prerequisites

Before you can run this script, ensure you have the following installed:
- Node.js (v14 or newer recommended)
- npm (Node Package Manager)

## Installation

1. **Clone the repository** or download the source code to your local machine.

   ```
   git clone https://github.com/0xshibu/Crypto-Price-Alert.git
   cd Crypto-Price-Alert
   ```

2. **Install dependencies** by running the following command in your project directory:

   ```
   npm install
   ```

## Configuration

To use the script, you need to specify the cryptocurrency you want to monitor and the upper and lower price thresholds for alerts. These can be set directly in the script or passed as command-line arguments (if you implement this functionality).

## Usage

1. **Start the script** by running:

   ```
   node cryptoPriceAlert.js
   ```

2. **Monitor the console** for real-time price updates and alerts.

3. **Adjust thresholds** as needed by editing the script or implementing a method to accept user inputs.

## Customization

To monitor a different cryptocurrency or change the frequency of price checks:
- Edit the `coinId` variable for different cryptocurrencies.
- Modify the `setInterval` duration for different update frequencies.

## Dependencies

- `node-fetch`: Used to make HTTP requests to the CoinGecko API for price data.
- `node-notifier`: Used for sending desktop notifications when price thresholds are crossed.

## Contributing

Contributions to the Cryptocurrency Price Alert script are welcome! Whether it's feature suggestions, bug reports, or code contributions, please feel free to make a pull request or open an issue.

## License

[MIT License](LICENSE.md)

## Disclaimer

This script is provided as-is for educational purposes only. Please use responsibly and at your own risk.
