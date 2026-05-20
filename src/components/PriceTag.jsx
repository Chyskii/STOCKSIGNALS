import React from 'react';

export default function PriceTag({ data }) {
  if (!data) return <em className="tag-research">Loading&#8230;</em>;
  const up = data.change >= 0;
  return (
    <div className="price-tag">
      <div className="price-value">${data.price.toFixed(2)}</div>
      <div className={`price-change ${up ? 'up' : 'down'}`}>
        {up ? '▲' : '▼'} {Math.abs(data.pct).toFixed(2)}%
      </div>
    </div>
  );
}
