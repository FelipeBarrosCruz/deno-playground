export interface Currency {
  value: number;
  from: string;
  to: string;
  price: number;
}

interface Ticker {
  base: string;
  target: string;
  price: number;
  volume?: string;
  change: number;
}

interface CryptonatorResponse {
  ticker: Ticker;
  timestamp: number;
  success: Boolean;
  error: string;
}

const getURL = (fromCurrency: string, toCurrency: string): string => (
  `https://api.cryptonator.com/api/ticker/${fromCurrency}-${toCurrency}`
);

export const convert = async (
  amount: number,
  fromCurrency: string,
  toCurrency: string,
): Promise<Currency> => {
  const request = await fetch(getURL(fromCurrency, toCurrency));
  const response: CryptonatorResponse = await request.json();
  const ticker: Ticker = response.ticker;

  return <Currency> {
    value: ticker.price * amount,
    from: fromCurrency,
    to: toCurrency,
    price: ticker.price,
  };
};
