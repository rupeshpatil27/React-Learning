import { useQuery } from "@tanstack/react-query";
import { fetchStockData } from "../api/stock";

function StockTicker() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["stock"],
        queryFn: fetchStockData,
        refetchInterval: 1000,
        refetchIntervalInBackground:true
    });

    if (isLoading) {
        return <div className="loading">Loading live stock data...</div>;
    }

    if (isError) {
        return <div className="error">Error: {error.message}</div>;
    }

    return (
        <div className="stock-ticker">
            <h1>Live Stock Prices</h1>
            <ul>
                <li><strong>AAPL:</strong> ${data.price}</li>
                <li><strong>GOOGL:</strong> ${data.price}</li>
                <li><strong>AMZN:</strong> ${data.price}</li>
            </ul>
            <p>Last updated: {new Date().toLocaleTimeString()}</p>
        </div>
    );
}

export default StockTicker;
