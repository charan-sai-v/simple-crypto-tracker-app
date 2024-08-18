// TradingViewWidget.tsx
import React, { useEffect, useRef, memo } from "react";

type TradingViewProps = {
  symbol: string;
  height?: string; // Optional prop for custom height
};

const TradingViewWidget: React.FC<TradingViewProps> = ({
  symbol,
  height = "500px",
}) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      const config = {
        width: "980",
        height: "610",
        symbol: `BINANCE:${symbol}USD`,
        interval: "D",
        timezone: "Etc/UTC",
        theme: "light",
        style: "1",
        locale: "en",
        enable_publishing: true,
        allow_symbol_change: true,
        calendar: false,
        support_host: "https://www.tradingview.com",
      };

      if (container.current) {
        script.innerHTML = JSON.stringify(config);
        container.current.appendChild(script);
      }
    };

    script.onerror = () => {
      console.error("Error loading TradingView script");
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, [symbol]);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default memo(TradingViewWidget);
