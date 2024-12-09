import React, { useState, useEffect } from 'react';

const Post = () => {
  const [transfers, setTransfers] = useState([]);
  const baseUrl = 'https://acb-api.algoritmika.org/api/transaction';

  useEffect(() => {
    const fetchTransfers = async () => {
      try {
        const response = await fetch(baseUrl);
        if (response.ok) {
          const data = await response.json();
          setTransfers(data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchTransfers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target.from.value;
    const to = e.target.to.value;
    const amount = e.target.amount.value;

    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ from, to, amount }),
      });

      if (response.ok) {
        const data = await response.json();
        setTransfers((prev) => [...prev, data]);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setTransfers((prev) => prev.filter((transfer) => transfer.id !== id));
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="form-section">
      <h2>Add a New Transfer</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="from" placeholder="From" required />
        <input type="text" name="to" placeholder="To" required />
        <input type="number" name="amount" placeholder="Amount" required />
        <button type="submit">Add</button>
      </form>
      <div className="transfer-list-container">
        <ul id="transferList">
          {transfers.map((transfer) => (
            <li key={transfer.id}>
              From: {transfer.from}, To: {transfer.to}, Amount: {transfer.amount}
              <button onClick={() => handleDelete(transfer.id)} style={{ marginLeft: '10px' }}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Post;
