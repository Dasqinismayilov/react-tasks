import React, { useState } from 'react';

const Show = () => {
  const [transfers, setTransfers] = useState([]);
  const baseUrl = 'https://acb-api.algoritmika.org/api/transaction';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target.showFrom.value;
    const to = e.target.showTo.value;

    let url = `${baseUrl}?`;
    if (from) url += `from=${encodeURIComponent(from)}`;
    if (to) url += `&to=${encodeURIComponent(to)}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setTransfers(data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="form-section">
      <h2>Show Details</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="showFrom" placeholder="From" />
        <input type="text" name="showTo" placeholder="To" />
        <button type="submit">Show</button>
      </form>
      <ul>
        {transfers.map((transfer) => (
          <li key={transfer.id}>
            From: {transfer.from}, To: {transfer.to}, Amount: {transfer.amount}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Show;
