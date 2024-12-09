import React from 'react';

const Put = () => {
  const baseUrl = 'https://acb-api.algoritmika.org/api/transaction';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = e.target.updateId.value;
    const from = e.target.updateFrom.value;
    const to = e.target.updateTo.value;
    const amount = e.target.updateAmount.value;

    try {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ from, to, amount }),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Transfer updated successfully: ' + JSON.stringify(data));
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="form-section">
      <h2>Update Information</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="updateId" placeholder="Enter ID" required />
        <input type="number" name="updateAmount" placeholder="Amount" required />
        <input type="text" name="updateFrom" placeholder="From" />
        <input type="text" name="updateTo" placeholder="To" />
        <button type="submit">Update</button>
      </form>
    </section>
  );
};

export default Put;
